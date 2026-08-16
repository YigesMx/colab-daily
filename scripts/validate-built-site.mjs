import { createReadStream, existsSync, lstatSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const docsRoot = join(root, 'docs')
const dailyRoot = join(docsRoot, 'daily')
const distRoot = join(docsRoot, '.vitepress', 'dist')
const configuredBase = process.env.VITEPRESS_BASE || '/'
if (
  !/^\/(?:[A-Za-z0-9._~-]+\/)*$/.test(configuredBase) ||
  configuredBase.split('/').some((segment) => segment === '.' || segment === '..')
) {
  fail('VITEPRESS_BASE must be an absolute, trailing-slash URL path without escapes')
}
const base = configuredBase

const contentTypes = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2'
}

function fail(message) {
  throw new Error(message)
}

function manifestFiles() {
  if (!existsSync(dailyRoot)) return []
  return readdirSync(dailyRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(dailyRoot, entry.name, '.managed-manifest.json'))
    .filter(existsSync)
}

function markdownTitle(path) {
  const source = readFileSync(resolve(root, path), 'utf8')
  const match = source.match(/^title:\s*(?:"([^"]+)"|'([^']+)'|(.+?))\s*$/m)
  return match?.[1] ?? match?.[2] ?? match?.[3]?.trim() ?? fail(`${path}: missing title`)
}

function cleanUrl(path) {
  if (!path.startsWith('docs/') || !path.endsWith('.md')) fail(`${path}: invalid Markdown path`)
  return `/${path.slice('docs/'.length, -'.md'.length)}`
}

function articleContract(candidate, date, category, legacy = false) {
  const values = [
    'data-article-contract="true"',
    `data-candidate-id="${candidate.candidate_id}"`,
    `data-date="${date}"`,
    `data-category="${category}"`,
    `data-group-rank="${legacy ? candidate.rank : candidate.group_rank}"`
  ]
  const score = legacy ? candidate.score : candidate.group_score
  if (score !== undefined) values.push(`data-group-score="${score}"`)
  if (!legacy) {
    values.push(
      `data-score-scale="${candidate.score_scale}"`,
      `data-rating-track="${candidate.rating_track}"`
    )
  }
  return values
}

function manifestChecks() {
  const pages = []
  const assets = []
  const dates = []
  const reports = []

  for (const manifestFile of manifestFiles()) {
    const manifest = JSON.parse(readFileSync(manifestFile, 'utf8'))
    const date = manifest.display_date
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`${manifestFile}: invalid display_date`)
    dates.push(date)

    if (manifest.schema_version === 3 && manifest.groups) {
      if (manifest.quota_contract !== 'three-track-v3') {
        fail(`${manifestFile}: invalid schema v3 quota_contract`)
      }
      const groups = manifest.groups ?? {}
      const count = (category) => groups[category]?.candidates?.length ?? 0
      const paperCount = count('Paper')
      const newsCount = count('News')
      const policyCount = count('Policy')
      const total = paperCount + newsCount + policyCount
      if (
        manifest.selection_limit !== 20 || total > manifest.selection_limit ||
        paperCount > 10 || policyCount > 5 || newsCount > 10 - policyCount
      ) fail(`${manifestFile}: invalid schema v3 quotas`)
      const quotaProof = manifest.quota_proof ?? {}
      const expectedQuotaProof = {
        selection_limit: manifest.selection_limit,
        paper_count: paperCount,
        news_count: newsCount,
        policy_count: policyCount,
        selected_total: total,
        news_policy_total: newsCount + policyCount,
        paper_capacity: 10,
        policy_capacity: 5,
        news_final_capacity: 10 - policyCount,
        news_fallback_used: Math.max(0, Math.min(newsCount, 10 - policyCount) - 5)
      }
      if (JSON.stringify(quotaProof) !== JSON.stringify(expectedQuotaProof)) {
        fail(`${manifestFile}: invalid schema v3 quota_proof`)
      }
    }

    if ((manifest.schema_version === 2 || manifest.schema_version === 3) && manifest.groups) {
      const reportCandidates = []
      for (const category of ['Paper', 'News', 'Policy']) {
        for (const candidate of manifest.groups[category].candidates) {
          reportCandidates.push({
            candidateId: candidate.candidate_id,
            category,
            groupRank: candidate.group_rank
          })
          pages.push({
            path: cleanUrl(candidate.path),
            expected: [...articleContract(candidate, date, category), markdownTitle(candidate.path)]
          })
        }
      }
      reports.push({ date, candidates: reportCandidates })
      for (const page of manifest.detached_legacy_pages) {
        pages.push({
          path: cleanUrl(page.path),
          expected: [
            'data-article-contract="true"',
            `data-candidate-id="${page.candidate_id}"`,
            `data-date="${date}"`,
            `data-category="${page.category}"`,
            markdownTitle(page.path)
          ]
        })
        for (const asset of page.assets) assets.push(`/${asset.path.slice('docs/public/'.length)}`)
      }
    } else {
      const reportCandidates = []
      for (const category of ['Paper', 'News', 'Policy']) {
        const candidates = (manifest.articles ?? [])
          .filter((article) => article.category === category)
          .sort((left, right) => left.rank - right.rank)
        candidates.forEach((candidate, index) => reportCandidates.push({
          candidateId: candidate.candidate_id,
          category,
          groupRank: index + 1
        }))
      }
      reports.push({ date, candidates: reportCandidates })
      for (const article of manifest.articles ?? []) {
        pages.push({
          path: cleanUrl(article.path),
          expected: [
            ...articleContract(article, date, article.category, true),
            markdownTitle(article.path)
          ]
        })
      }
    }
    for (const asset of manifest.assets ?? []) {
      assets.push(`/${asset.path.slice('docs/public/'.length)}`)
    }
  }
  const latestReport = reports.sort((left, right) => right.date.localeCompare(left.date))[0]
  const reportCards = (latestReport?.candidates ?? []).map(({ candidateId, category, groupRank }) => [
    `data-card-candidate-id="${candidateId}"`,
    `data-card-category="${category}"`,
    `data-card-group-rank="${groupRank}"`,
    `data-card-emphasis="${category === 'Paper' && groupRank <= 3 ? 'true' : 'false'}"`
  ])
  return {
    pages,
    assets: [...new Set(assets)],
    dates: [...new Set(dates)],
    reportExpected: [
      `class="quick-nav"`,
      `href="#section-paper"`,
      `href="#section-news"`,
      `href="#section-policy"`,
      `data-section-order="1"`,
      `data-section-order="2"`,
      `data-section-order="3"`,
      ...reportCards.flat()
    ],
    reportOrder: ['Paper', 'News', 'Policy'].flatMap((category) => [
      `data-daily-category="${category}"`,
      ...reportCards
        .filter(([, cardCategory]) => cardCategory === `data-card-category="${category}"`)
        .map(([candidateId]) => candidateId)
    ])
  }
}

function requestPathToFile(requestPath) {
  const parsed = decodeURIComponent(new URL(requestPath, 'http://localhost').pathname)
  if (base !== '/' && !parsed.startsWith(base)) return undefined
  const withoutBase = base === '/' ? parsed : `/${parsed.slice(base.length)}`
  const normalized = normalize(withoutBase).replace(/^[/\\]+/, '')
  const requested = resolve(distRoot, normalized)
  const relativePath = relative(distRoot, requested)
  if (relativePath.startsWith('..') || relativePath.includes(`..${process.platform === 'win32' ? '\\' : '/'}`)) {
    return undefined
  }
  const candidates = [requested]
  if (!extname(requested)) candidates.push(`${requested}.html`, join(requested, 'index.html'))
  return candidates.find((candidate) => existsSync(candidate) && lstatSync(candidate).isFile())
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function check(url, expected = [], expectedType, ordered = [], requireBody = true) {
  const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(5000) })
  if (response.status !== 200) fail(`${url}: expected HTTP 200, got ${response.status}`)
  if (expectedType && !response.headers.get('content-type')?.startsWith(expectedType)) {
    fail(`${url}: expected content-type ${expectedType}, got ${response.headers.get('content-type')}`)
  }
  const body = Buffer.from(await response.arrayBuffer())
  if (requireBody && !body.length) fail(`${url}: response body is empty`)
  if (expected.length) {
    const text = body.toString('utf8')
    for (const value of expected) {
      if (!text.includes(value) && !text.includes(escapeHtml(value))) {
        fail(`${url}: rendered output is missing ${JSON.stringify(value)}`)
      }
    }
    let previous = -1
    for (const value of ordered) {
      const index = text.indexOf(value)
      if (index <= previous) fail(`${url}: rendered values are out of order at ${JSON.stringify(value)}`)
      previous = index
    }
  }
  return body
}

function renderedLocalUrls(pageUrl, body, origin) {
  const text = body.toString('utf8')
  const urls = new Set()
  for (const match of text.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw = match[1].replaceAll('&amp;', '&')
    if (raw.startsWith('#') || /^(?:mailto|tel|data|javascript):/i.test(raw)) continue
    const target = new URL(raw, pageUrl)
    if (target.origin !== origin) continue
    if (!target.pathname.startsWith(base)) {
      fail(`${pageUrl}: rendered local URL escapes VITEPRESS_BASE: ${raw}`)
    }
    target.hash = ''
    urls.add(target.href)
  }
  return urls
}

if (!existsSync(distRoot) || !statSync(distRoot).isDirectory()) {
  fail('docs/.vitepress/dist must exist before postbuild validation')
}

const checks = manifestChecks()
const server = createServer((request, response) => {
  const file = requestPathToFile(request.url || '/')
  if (!file) {
    response.writeHead(404).end('Not found')
    return
  }
  response.writeHead(200, { 'content-type': contentTypes[extname(file)] || 'application/octet-stream' })
  createReadStream(file).pipe(response)
})

await new Promise((resolveListen, reject) => {
  server.once('error', reject)
  server.listen(0, '127.0.0.1', resolveListen)
})

try {
  const address = server.address()
  if (!address || typeof address === 'string') fail('local validation server did not bind a TCP port')
  const origin = `http://127.0.0.1:${address.port}`
  const atBase = (path) => `${origin}${base === '/' ? '' : base.slice(0, -1)}${path}`
  const pageBodies = new Map()
  const indexUrl = atBase('/')
  pageBodies.set(indexUrl, await check(
    indexUrl,
    [...checks.dates, ...checks.reportExpected],
    'text/html',
    checks.reportOrder
  ))
  for (const page of checks.pages) {
    const url = atBase(page.path)
    pageBodies.set(url, await check(url, page.expected, 'text/html'))
  }
  for (const asset of checks.assets) await check(atBase(asset), [], 'image/')

  const renderedUrls = new Set()
  for (const [pageUrl, body] of pageBodies) {
    for (const url of renderedLocalUrls(pageUrl, body, origin)) renderedUrls.add(url)
  }
  for (const url of renderedUrls) await check(url, [], undefined, [], false)
  console.log(
    `validated ${checks.pages.length} pages, ${checks.assets.length} assets, ` +
    `and ${renderedUrls.size} rendered local URLs over HTTP`
  )
} finally {
  await new Promise((resolveClose, reject) => server.close((error) => error ? reject(error) : resolveClose()))
}
