import { createContentLoader } from 'vitepress'
import {
  closeSync,
  constants,
  existsSync,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  readdirSync
} from 'node:fs'
import * as nodePath from 'node:path'
import { fileURLToPath } from 'node:url'

export interface ArticleSource {
  name: string
  url: string
}

export type ArticleCategory = 'Paper' | 'News' | 'Policy'
export type ArticleScoreKind = 'group-local' | 'historical'

export interface DailyArticle {
  candidateId: string
  date: string
  groupRank: number
  title: string
  authors: string[]
  summary: string
  keywords: string[]
  groupScore: number
  scoreKind: ArticleScoreKind
  scoreScale?: string
  ratingTrack?: string
  sources: ArticleSource[]
  category: ArticleCategory
  previewImage?: string
  url: string
}

export interface Facet {
  name: string
  count: number
}

export interface DailySection {
  category: ArticleCategory
  label: string
  articles: DailyArticle[]
}

export interface DailyGroup {
  date: string
  articleCount: number
  sections: DailySection[]
  keywords: Facet[]
}

export interface DailyArchive {
  dates: DailyGroup[]
  articleCount: number
}

interface LoadedArticle extends DailyArticle {
  schemaVersion: 1 | 2 | 3
  legacyRank?: number
}

interface ManagedCandidate {
  candidateId: string
  category: ArticleCategory
  groupRank: number
  groupScore?: number
  scoreScale?: string
  ratingTrack?: string
  previewImage?: string
  previewImageDeclared?: boolean
  path: string
  url: string
}

interface DetachedLegacyPage {
  candidateId: string
  category: ArticleCategory
  previewImage?: string
  assets: ManagedAsset[]
  path: string
  url: string
}

interface ManagedAsset {
  candidateId: string
  path: string
  storagePath?: string
  url: string
}

interface ManagedDay {
  date: string
  mode: 'legacy' | 'v2' | 'v3'
  candidates: ManagedCandidate[]
  detachedLegacyPages: DetachedLegacyPage[]
  assets: Map<string, ManagedAsset>
  selectionLimit?: number
  schemaVersion?: 1 | 2 | 3
}

interface LegacyOwnershipReceipt {
  pages: DetachedLegacyPage[]
}

const repositoryRoot = fileURLToPath(new URL('../../../', import.meta.url))

const canonicalV2TopLevelKeys = [
  'schema_version',
  'cycle_id',
  'display_date',
  'selection_limit',
  'groups',
  'assets',
  'detached_legacy_pages',
  'generated_at',
  'quota_proof',
  'compatibility_checks'
] as const

const canonicalV3TopLevelKeys = [
  'schema_version',
  'quota_contract',
  'cycle_id',
  'display_date',
  'selection_limit',
  'groups',
  'assets',
  'detached_legacy_pages',
  'generated_at',
  'quota_proof',
  'compatibility_checks'
] as const

const canonicalV2CandidateKeys = [
  'candidate_id',
  'category',
  'group_rank',
  'group_score',
  'score_scale',
  'rating_track',
  'path',
  'bytes',
  'preview_image'
] as const

const managedAssetKeys = ['candidate_id', 'path', 'bytes'] as const

const detachedLegacyPageKeys = [
  'candidate_id',
  'category',
  'path',
  'bytes',
  'preview_image',
  'assets'
] as const

const articleSections: Record<ArticleCategory, readonly string[]> = {
  Paper: ['研究问题与贡献', '方法与系统', '实验设置与数据', '结果、限制与结论', '来源链接'],
  News: ['事件概述', '已确认事实与证据', '影响与后续观察', '来源链接'],
  Policy: ['政策行动', '适用范围与约束力', '关键条款', '时间线', '影响与待观察事项', '来源链接']
}

const categoryOptions = [
  { category: 'Paper', label: '论文', path: 'paper' },
  { category: 'News', label: '新闻', path: 'news' },
  { category: 'Policy', label: '政策', path: 'policy' }
] as const satisfies ReadonlyArray<{
  category: ArticleCategory
  label: string
  path: string
}>

const legacyCategoryContracts: Record<ArticleCategory, { scoreScale: string; ratingTrack: string }> = {
  Paper: { scoreScale: 'paper-v2', ratingTrack: 'paper' },
  News: { scoreScale: 'news-policy-v2', ratingTrack: 'news_policy' },
  Policy: { scoreScale: 'news-policy-v2', ratingTrack: 'news_policy' }
}

const v3CategoryContracts: Record<ArticleCategory, { scoreScale: string; ratingTrack: string }> = {
  Paper: { scoreScale: 'paper-v2', ratingTrack: 'paper' },
  News: { scoreScale: 'news-v3', ratingTrack: 'news' },
  Policy: { scoreScale: 'policy-v3', ratingTrack: 'policy' }
}

const groupedFields = ['groupRank', 'groupScore', 'scoreScale', 'ratingTrack'] as const

function normalizedField(field: string): string {
  return field.replace(/[^a-z0-9]/gi, '').toLowerCase()
}

function isScopedRankOrScore(field: string): boolean {
  const normalized = normalizedField(field)
  return /(generic|global|final|combined)/.test(normalized) && /(rank|score)/.test(normalized)
}

function isForbiddenV2Field(field: string): boolean {
  const normalized = normalizedField(field)
  return normalized === 'all' || normalized === 'rank' || normalized === 'score' ||
    isScopedRankOrScore(field)
}

function rejectForbiddenV2Fields(value: unknown, path: string): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => rejectForbiddenV2Fields(item, `${path}[${index}]`))
    return
  }
  if (!value || typeof value !== 'object') return

  for (const [field, child] of Object.entries(value as Record<string, unknown>)) {
    if (isForbiddenV2Field(field)) {
      throw new Error(
        `${path}: "${field}" is not allowed; schema v2 forbids All and generic/global/final/combined rank or score fields`
      )
    }
    rejectForbiddenV2Fields(child, `${path}.${field}`)
  }
}

function validateRankingFieldNames(
  frontmatter: Record<string, unknown>,
  schemaVersion: 1 | 2 | 3,
  path: string
): void {
  if (schemaVersion !== 1) {
    rejectForbiddenV2Fields(frontmatter, `${path}: front matter`)
    return
  }
  for (const field of Object.keys(frontmatter)) {
    if (isScopedRankOrScore(field)) {
      throw new Error(
        `${path}: front matter "${field}" is not allowed; generic/global/final/combined ranking fields are forbidden`
      )
    }
  }
}

function hasField(record: Record<string, unknown>, field: string): boolean {
  return Object.prototype.hasOwnProperty.call(record, field)
}

function recordValue(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${path} must be an object`)
  }
  return value as Record<string, unknown>
}

function exactObjectKeys(
  record: Record<string, unknown>,
  expectedKeys: readonly string[],
  path: string,
  optionalKeys: readonly string[] = []
): void {
  const actualKeys = Object.keys(record).filter((key) => !optionalKeys.includes(key))
  if (
    actualKeys.length !== expectedKeys.length ||
    actualKeys.some((key, index) => key !== expectedKeys[index])
  ) {
    throw new Error(`${path} must contain exactly, in order: ${expectedKeys.join(', ')}`)
  }
}

function readRegularFile(path: string, description: string): string {
  let descriptor: number | undefined
  try {
    descriptor = openSync(path, constants.O_RDONLY | constants.O_NOFOLLOW)
    const stats = fstatSync(descriptor)
    if (!stats.isFile() || stats.nlink !== 1 || stats.size <= 0) {
      throw new Error(`${description} must be a nonempty single-link regular file`)
    }
    return readFileSync(descriptor, 'utf8')
  } catch (error) {
    throw new Error(`${description} cannot be read safely: ${(error as Error).message}`)
  } finally {
    if (descriptor !== undefined) closeSync(descriptor)
  }
}

function detachedLegacyReceiptPath(date: string): string {
  return `docs/daily/${date}/.legacy-ownership.json`
}

function sameManagedAsset(left: ManagedAsset, right: ManagedAsset): boolean {
  return left.candidateId === right.candidateId && left.path === right.path && left.url === right.url
}

function sameDetachedLegacyPage(left: DetachedLegacyPage, right: DetachedLegacyPage): boolean {
  return (
    left.candidateId === right.candidateId &&
    left.category === right.category &&
    left.path === right.path &&
    left.previewImage === right.previewImage &&
    left.assets.length === right.assets.length &&
    left.assets.every((asset, index) => sameManagedAsset(asset, right.assets[index]))
  )
}

function validateLegacyOwnershipReceipt(
  date: string,
  detachedLegacyPages: DetachedLegacyPage[]
): void {
  const receiptPath = detachedLegacyReceiptPath(date)
  const receiptFile = nodePath.resolve(repositoryRoot, receiptPath)
  if (!detachedLegacyPages.length) {
    if (existsSync(receiptFile)) {
      throw new Error(`${receiptPath}: ownership receipt must not exist when no legacy pages are detached`)
    }
    return
  }

  let rawReceipt: string
  try {
    rawReceipt = readRegularFile(receiptFile, receiptPath)
  } catch (error) {
    throw new Error(`${receiptPath}: required for detached legacy ownership: ${(error as Error).message}`)
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(rawReceipt)
  } catch (error) {
    throw new Error(`${receiptPath}: invalid JSON: ${(error as Error).message}`)
  }
  const receipt = recordValue(parsed, receiptPath)
  exactObjectKeys(receipt, ['pages'], receiptPath)
  const pages = receipt.pages
  if (!Array.isArray(pages)) {
    throw new Error(`${receiptPath}: "pages" must be an array`)
  }

  const ownedPages = parseDetachedLegacyPages(
    { detached_legacy_pages: pages },
    date,
    `${receiptPath}: pages`
  )
  const ownership: LegacyOwnershipReceipt = { pages: ownedPages }
  if (
    ownership.pages.length !== detachedLegacyPages.length ||
    ownership.pages.some((page, index) => !sameDetachedLegacyPage(page, detachedLegacyPages[index]))
  ) {
    throw new Error(`${receiptPath}: pages must exactly match detached_legacy_pages ownership`)
  }
}

function manifestString(value: unknown, field: string, path: string): string {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${path}: "${field}" must be a non-empty string`)
  }
  return value
}

function manifestPositiveInteger(value: unknown, field: string, path: string): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 1) {
    throw new Error(`${path}: "${field}" must be a positive integer`)
  }
  return value
}

function optionalManifestBytes(
  record: Record<string, unknown>,
  path: string
): number | undefined {
  return hasField(record, 'bytes')
    ? manifestPositiveInteger(record.bytes, 'bytes', path)
    : undefined
}

function validateManagedFile(
  managedPath: string,
  declaredBytes: number | undefined,
  path: string
): void {
  const file = nodePath.resolve(repositoryRoot, managedPath)
  const repositoryPath = nodePath.relative(repositoryRoot, file)
  if (
    !repositoryPath ||
    nodePath.isAbsolute(repositoryPath) ||
    repositoryPath.startsWith(`..${nodePath.sep}`)
  ) {
    throw new Error(`${path}: managed path must remain inside the repository`)
  }

  const root = nodePath.parse(file).root
  let current = root
  let stats: ReturnType<typeof lstatSync> | undefined
  for (const segment of file.slice(root.length).split(nodePath.sep).filter(Boolean)) {
    current = nodePath.join(current, segment)
    try {
      stats = lstatSync(current)
    } catch (error) {
      throw new Error(`${path}: managed file does not exist: ${(error as Error).message}`)
    }
    if (stats.isSymbolicLink()) {
      throw new Error(`${path}: managed files may not have a symlink at ${current}`)
    }
  }

  let descriptor: number | undefined
  try {
    descriptor = openSync(file, constants.O_RDONLY | constants.O_NOFOLLOW)
    const openStats = fstatSync(descriptor)
    if (!openStats.isFile() || openStats.nlink !== 1 || openStats.size <= 0) {
      throw new Error('managed file must be a nonempty single-link regular file')
    }
    if (declaredBytes !== undefined && openStats.size !== declaredBytes) {
      throw new Error(
        `declared bytes ${declaredBytes} do not match actual file size ${openStats.size}`
      )
    }
  } catch (error) {
    throw new Error(`${path}: cannot open managed file safely: ${(error as Error).message}`)
  } finally {
    if (descriptor !== undefined) closeSync(descriptor)
  }
}

function manifestSelectionLimit(value: unknown, path: string, schemaVersion: 2 | 3): number {
  const limit = manifestPositiveInteger(value, 'selection_limit', path)
  const maximum = schemaVersion === 2 ? 15 : 20
  if (schemaVersion === 3 && limit !== 20) {
    throw new Error(`${path}: schema v3 "selection_limit" must be exactly 20`)
  }
  if (limit > maximum) {
    throw new Error(`${path}: "selection_limit" must be between 1 and ${maximum}`)
  }
  return limit
}

function manifestGroupScore(value: unknown, path: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > 100) {
    throw new Error(`${path}: "group_score" must be a finite number between 0 and 100`)
  }
  return value
}

function safeCandidateId(value: unknown, field: string, path: string): string {
  const candidateId = manifestString(value, field, path)
  if (
    !/^[A-Za-z0-9](?:[A-Za-z0-9._~-]|%[0-9A-Fa-f]{2})*$/.test(candidateId) ||
    candidateId === '.' ||
    candidateId === '..'
  ) {
    throw new Error(`${path}: "${field}" must be a filename-safe CandidateID path segment`)
  }
  return candidateId
}

function assetPathKey(candidateId: string): string {
  // URL-backed CandidateIDs may contain validated percent escapes. Public asset
  // directories use an unencoded filesystem-safe alias while preserving the
  // business CandidateID in manifests and rendered article contracts.
  return candidateId.replace(/%([0-9A-Fa-f]{2})/g, (_match, hex: string) => `_${hex.toLowerCase()}`)
}

function validateManifestIdentity(
  manifest: Record<string, unknown>,
  date: string,
  manifestPath: string,
  required: boolean
): void {
  if (required || hasField(manifest, 'cycle_id')) {
    if (manifest.cycle_id !== `daily-${date}`) {
      throw new Error(`${manifestPath}: cycle_id must be daily-${date}`)
    }
  }
  if (required || hasField(manifest, 'display_date')) {
    if (manifest.display_date !== date) {
      throw new Error(`${manifestPath}: display_date must match its ${date} directory`)
    }
  }
}

function managedCandidatePath(
  value: unknown,
  date: string,
  category: ArticleCategory,
  groupRank: number,
  manifestPath: string
): { path: string; url: string } {
  const path = manifestString(value, 'path', manifestPath)
  const categoryPath = categoryOptions.find((option) => option.category === category)!.path
  const prefix = `docs/daily/${date}/${categoryPath}/`
  const filename = path.startsWith(prefix) ? path.slice(prefix.length) : ''
  if (
    !filename ||
    filename.includes('/') ||
    filename.includes('\\') ||
    filename.includes('%') ||
    filename.includes('?') ||
    filename.includes('#') ||
    !filename.endsWith('.md') ||
    !new RegExp(
      `^${String(groupRank).padStart(2, '0')}-[a-z0-9](?:[a-z0-9-]{0,78}[a-z0-9])?\\.md$`
    ).test(filename)
  ) {
    throw new Error(
      `${manifestPath}: "path" must be ${prefix}${String(groupRank).padStart(2, '0')}-<safe-slug>.md`
    )
  }
  return { path, url: `/${path.slice('docs/'.length, -'.md'.length)}` }
}

function managedLegacyPath(
  value: unknown,
  date: string,
  manifestPath: string
): { path: string; url: string } {
  const path = manifestString(value, 'path', manifestPath)
  const prefix = `docs/daily/${date}/`
  const filename = path.startsWith(prefix) ? path.slice(prefix.length) : ''
  if (
    !filename ||
    filename.includes('/') ||
    filename.includes('\\') ||
    filename.includes('%') ||
    filename.includes('?') ||
    filename.includes('#') ||
    !filename.endsWith('.md')
  ) {
    throw new Error(`${manifestPath}: "path" must be a flat legacy Markdown path under ${prefix}`)
  }
  return { path, url: `/${path.slice('docs/'.length, -'.md'.length)}` }
}

const previewExtensions = new Set(['png', 'jpg', 'jpeg', 'webp', 'gif', 'avif'])

function validatePreviewPath(
  value: unknown,
  date: string,
  candidateId: string,
  path: string,
  canonical: boolean
): string | undefined {
  if (value === undefined || value === null) return undefined
  const previewImage = manifestString(value, 'previewImage', path)
  if (
    previewImage.includes('\\') ||
    previewImage.includes('?') ||
    previewImage.includes('#') ||
    previewImage.includes('%')
  ) {
    throw new Error(`${path}: preview image may not contain a query, fragment, backslash, or encoded path`)
  }

  const prefix = `/daily/${date}/assets/${assetPathKey(candidateId)}/`
  const filename = previewImage.startsWith(prefix) ? previewImage.slice(prefix.length) : ''
  const extension = filename.includes('.') ? filename.slice(filename.lastIndexOf('.') + 1) : ''
  if (
    !filename ||
    filename.includes('/') ||
    filename === '.' ||
    filename === '..' ||
    !previewExtensions.has(extension) ||
    (canonical && filename !== `preview.${extension}`)
  ) {
    const expected = canonical
      ? `${prefix}preview.<png|jpg|jpeg|webp|gif|avif>`
      : `${prefix}<recognized image filename>`
    throw new Error(`${path}: preview image must be ${expected}`)
  }
  return previewImage
}

function parseManagedAssets(
  manifest: Record<string, unknown>,
  date: string,
  manifestPath: string,
  canonical: boolean,
  required: boolean,
  exactEntries = false
): Map<string, ManagedAsset> {
  if (!Array.isArray(manifest.assets)) {
    if (!required && manifest.assets === undefined) return new Map()
    throw new Error(`${manifestPath}: "assets" must be an array`)
  }

  const assets = new Map<string, ManagedAsset>()
  const paths = new Set<string>()
  for (const [index, value] of manifest.assets.entries()) {
    const assetPath = `${manifestPath}: assets[${index}]`
    const asset = recordValue(value, assetPath)
    if (exactEntries) exactObjectKeys(asset, managedAssetKeys, assetPath, ['storage_path'])
    const candidateId = safeCandidateId(asset.candidate_id, 'candidate_id', assetPath)
    const declaredPath = manifestString(asset.path, 'path', assetPath)
    const path = typeof (asset as Record<string, unknown>).storage_path === 'string'
      ? manifestString((asset as Record<string, unknown>).storage_path, 'storage_path', assetPath)
      : declaredPath
    const publicPrefix = `docs/public/daily/${date}/assets/${assetPathKey(candidateId)}/`
    const filename = declaredPath.startsWith(publicPrefix) ? declaredPath.slice(publicPrefix.length) : ''
    const previewImage = validatePreviewPath(
      filename ? `/${declaredPath.slice('docs/public/'.length)}` : declaredPath,
      date,
      candidateId,
      assetPath,
      canonical
    )
    if (!filename || !previewImage) {
      throw new Error(`${assetPath}: asset path must be under ${publicPrefix}`)
    }
    if (assets.has(candidateId)) {
      throw new Error(`${manifestPath}: duplicate preview asset CandidateID "${candidateId}"`)
    }
    if (paths.has(path)) {
      throw new Error(`${manifestPath}: duplicate preview asset path "${path}"`)
    }

    const declaredBytes = exactEntries
      ? manifestPositiveInteger(asset.bytes, 'bytes', assetPath)
      : optionalManifestBytes(asset, assetPath)
    validateManagedFile(path, declaredBytes, assetPath)

    paths.add(path)
    assets.set(candidateId, { candidateId, path: declaredPath, storagePath: path, url: previewImage })
  }
  return assets
}

function parseDetachedLegacyAssets(
  value: unknown,
  date: string,
  candidateId: string,
  path: string
): ManagedAsset[] {
  if (!Array.isArray(value)) {
    throw new Error(`${path}: "assets" must be an array`)
  }

  const assets: ManagedAsset[] = []
  const paths = new Set<string>()
  for (const [index, entry] of value.entries()) {
    const assetPath = `${path}: assets[${index}]`
    const asset = recordValue(entry, assetPath)
    exactObjectKeys(asset, managedAssetKeys, assetPath)
    if (safeCandidateId(asset.candidate_id, 'candidate_id', assetPath) !== candidateId) {
      throw new Error(`${assetPath}: candidate_id must match its detached legacy page`)
    }
    const managedPath = manifestString(asset.path, 'path', assetPath)
    const publicPrefix = `docs/public/daily/${date}/assets/${assetPathKey(candidateId)}/`
    const filename = managedPath.startsWith(publicPrefix)
      ? managedPath.slice(publicPrefix.length)
      : ''
    const url = validatePreviewPath(
      filename ? `/${managedPath.slice('docs/public/'.length)}` : managedPath,
      date,
      candidateId,
      assetPath,
      false
    )
    if (!filename || !url) {
      throw new Error(`${assetPath}: asset path must be under ${publicPrefix}`)
    }
    if (paths.has(managedPath)) {
      throw new Error(`${path}: duplicate detached legacy asset path "${managedPath}"`)
    }
    validateManagedFile(
      managedPath,
      manifestPositiveInteger(asset.bytes, 'bytes', assetPath),
      assetPath
    )
    paths.add(managedPath)
    assets.push({ candidateId, path: managedPath, url })
  }
  return assets
}

function parseDetachedLegacyPages(
  manifest: Record<string, unknown>,
  date: string,
  manifestPath: string
): DetachedLegacyPage[] {
  const value = manifest.detached_legacy_pages
  if (!Array.isArray(value)) {
    throw new Error(`${manifestPath}: "detached_legacy_pages" must be an array`)
  }

  const pages: DetachedLegacyPage[] = []
  const paths = new Set<string>()
  const candidateIds = new Set<string>()
  const assetPaths = new Set<string>()
  for (const [index, entry] of value.entries()) {
    const entryPath = `${manifestPath}: detached_legacy_pages[${index}]`
    const item = recordValue(entry, entryPath)
    exactObjectKeys(item, detachedLegacyPageKeys, entryPath)
    const managedPath = managedLegacyPath(item.path, date, entryPath)
    if (paths.has(managedPath.path)) {
      throw new Error(`${manifestPath}: duplicate detached legacy path "${managedPath.path}"`)
    }
    const candidateId = safeCandidateId(item.candidate_id, 'candidate_id', entryPath)
    if (candidateIds.has(candidateId)) {
      throw new Error(`${manifestPath}: duplicate detached legacy candidate_id "${candidateId}"`)
    }
    const category = requiredCategory(item.category, entryPath)
    const previewImage = validatePreviewPath(
      item.preview_image,
      date,
      candidateId,
      entryPath,
      false
    )
    const assets = parseDetachedLegacyAssets(item.assets, date, candidateId, entryPath)
    if (previewImage && !assets.some((asset) => asset.url === previewImage)) {
      throw new Error(`${entryPath}: preview_image must be included in its owned assets closure`)
    }
    for (const asset of assets) {
      if (assetPaths.has(asset.path)) {
        throw new Error(`${manifestPath}: detached legacy asset "${asset.path}" has multiple owners`)
      }
      assetPaths.add(asset.path)
    }
    validateManagedFile(
      managedPath.path,
      manifestPositiveInteger(item.bytes, 'bytes', entryPath),
      entryPath
    )
    paths.add(managedPath.path)
    candidateIds.add(candidateId)
    pages.push({
      ...managedPath,
      candidateId,
      category,
      previewImage,
      assets
    })
  }
  return pages
}

function parseManagedGrouped(
  manifest: Record<string, unknown>,
  date: string,
  manifestPath: string
): ManagedDay {
  const schemaVersion = manifest.schema_version
  if (schemaVersion !== 2 && schemaVersion !== 3) {
    throw new Error(`${manifestPath}: grouped schema_version must be 2 or 3`)
  }
  exactObjectKeys(
    manifest,
    schemaVersion === 3 ? canonicalV3TopLevelKeys : canonicalV2TopLevelKeys,
    manifestPath
  )
  if (schemaVersion === 3 && manifest.quota_contract !== 'three-track-v3') {
    throw new Error(`${manifestPath}: schema v3 quota_contract must be three-track-v3`)
  }
  const categoryContracts = schemaVersion === 2 ? legacyCategoryContracts : v3CategoryContracts
  validateManifestIdentity(manifest, date, manifestPath, true)
  rejectForbiddenV2Fields(manifest, manifestPath)
  const generatedAt = manifestString(manifest.generated_at, 'generated_at', manifestPath)
  if (Number.isNaN(Date.parse(generatedAt))) {
    throw new Error(`${manifestPath}: generated_at must be a valid timestamp`)
  }
  const selectionLimit = manifestSelectionLimit(manifest.selection_limit, manifestPath, schemaVersion)
  const groups = recordValue(manifest.groups, `${manifestPath}: "groups"`)
  exactObjectKeys(
    groups,
    categoryOptions.map(({ category }) => category),
    `${manifestPath}: "groups"`
  )

  const candidates: ManagedCandidate[] = []
  const candidateIds = new Set<string>()
  const paths = new Set<string>()
  for (const { category } of categoryOptions) {
    const group = recordValue(groups[category], `${manifestPath}: groups.${category}`)
    exactObjectKeys(group, ['candidates'], `${manifestPath}: groups.${category}`)
    if (!Array.isArray(group.candidates)) {
      throw new Error(`${manifestPath}: groups.${category}.candidates must be an array`)
    }

    for (const [index, value] of group.candidates.entries()) {
      const candidatePath = `${manifestPath}: groups.${category}.candidates[${index}]`
      const candidate = recordValue(value, candidatePath)
      exactObjectKeys(candidate, canonicalV2CandidateKeys, candidatePath)
      const candidateId = safeCandidateId(candidate.candidate_id, 'candidate_id', candidatePath)
      const declaredCategory = requiredCategory(candidate.category, candidatePath)
      const groupRank = manifestPositiveInteger(candidate.group_rank, 'group_rank', candidatePath)
      const groupScore = manifestGroupScore(candidate.group_score, candidatePath)
      const scoreScale = manifestString(candidate.score_scale, 'score_scale', candidatePath)
      const ratingTrack = manifestString(candidate.rating_track, 'rating_track', candidatePath)
      if (groupRank !== index + 1) {
        throw new Error(`${candidatePath}: group_rank must equal its one-based array position`)
      }
      const managedPath = managedCandidatePath(
        candidate.path,
        date,
        category,
        groupRank,
        candidatePath
      )
      validateManagedFile(
        managedPath.path,
        manifestPositiveInteger(candidate.bytes, 'bytes', candidatePath),
        candidatePath
      )
      const categoryOption = categoryOptions.find((option) => option.category === category)!

      if (declaredCategory !== category) {
        throw new Error(`${candidatePath}: category must match its ${category} group`)
      }
      const contract = categoryContracts[category]
      if (scoreScale !== contract.scoreScale || ratingTrack !== contract.ratingTrack) {
        throw new Error(
          `${candidatePath}: schema v${schemaVersion} ${category} must use score_scale ${contract.scoreScale} and rating_track ${contract.ratingTrack}`
        )
      }
      if (candidateIds.has(candidateId)) {
        throw new Error(`${manifestPath}: duplicate candidate_id "${candidateId}"`)
      }
      if (paths.has(managedPath.path)) {
        throw new Error(`${manifestPath}: duplicate candidate path "${managedPath.path}"`)
      }
      candidateIds.add(candidateId)
      paths.add(managedPath.path)
      candidates.push({
        candidateId,
        category,
        groupRank,
        groupScore,
        scoreScale,
        ratingTrack,
        previewImageDeclared: true,
        previewImage: validatePreviewPath(
          candidate.preview_image,
          date,
          candidateId,
          candidatePath,
          true
        ),
        ...managedPath
      })
    }

  }

  const newsPolicyCount = candidates.filter(
    (candidate) => candidate.category === 'News' || candidate.category === 'Policy'
  ).length
  const paperCount = candidates.filter((candidate) => candidate.category === 'Paper').length
  const policyCount = candidates.filter((candidate) => candidate.category === 'Policy').length
  const newsCount = candidates.filter((candidate) => candidate.category === 'News').length
  if (schemaVersion === 3) {
    if (candidates.length > selectionLimit || paperCount > 10 || policyCount > 5 || newsCount > 10 - policyCount) {
      throw new Error(`${manifestPath}: schema v3 candidate totals violate 20/10/5 quotas`)
    }
  } else if (
    candidates.length > selectionLimit ||
    newsPolicyCount > Math.min(5, selectionLimit) ||
    paperCount > selectionLimit - newsPolicyCount
  ) {
    throw new Error(`${manifestPath}: candidate totals violate legacy selection_limit or News/Policy quota`)
  }

  const v2QuotaProofKeys = [
    'selection_limit',
    'paper_count',
    'news_count',
    'policy_count',
    'selected_total',
    'news_policy_total',
    'paper_capacity'
  ] as const
  const v3QuotaProofKeys = [
    ...v2QuotaProofKeys,
    'policy_capacity',
    'news_final_capacity',
    'news_fallback_used'
  ] as const
  const quotaProof = recordValue(manifest.quota_proof, `${manifestPath}: quota_proof`)
  exactObjectKeys(
    quotaProof,
    schemaVersion === 3 ? v3QuotaProofKeys : v2QuotaProofKeys,
    `${manifestPath}: quota_proof`
  )
  const newsFinalCapacity = 10 - policyCount
  const newsFallbackUsed = Math.max(0, Math.min(newsCount, newsFinalCapacity) - 5)
  if (
    quotaProof.selection_limit !== selectionLimit ||
    quotaProof.paper_count !== paperCount ||
    quotaProof.news_count !== newsCount ||
    quotaProof.policy_count !== policyCount ||
    quotaProof.selected_total !== candidates.length ||
    quotaProof.news_policy_total !== newsPolicyCount ||
    quotaProof.paper_capacity !== (schemaVersion === 3 ? 10 : selectionLimit - newsPolicyCount) ||
    (
      schemaVersion === 3 && (
        quotaProof.policy_capacity !== 5 ||
        quotaProof.news_final_capacity !== newsFinalCapacity ||
        quotaProof.news_fallback_used !== newsFallbackUsed
      )
    )
  ) {
    throw new Error(`${manifestPath}: quota_proof does not match the grouped candidate counts`)
  }

  const assets = parseManagedAssets(manifest, date, manifestPath, true, true, true)
  for (const assetCandidateId of assets.keys()) {
    if (!candidateIds.has(assetCandidateId)) {
      throw new Error(`${manifestPath}: v2 asset CandidateID "${assetCandidateId}" is not owned by groups`)
    }
  }
  for (const candidate of candidates) {
    const asset = assets.get(candidate.candidateId)
    if (candidate.previewImageDeclared && candidate.previewImage !== asset?.url) {
      throw new Error(`${manifestPath}: ${candidate.candidateId} preview_image must match its owned asset`)
    }
    if (!candidate.previewImageDeclared && asset) {
      candidate.previewImage = validatePreviewPath(
        asset.url,
        date,
        candidate.candidateId,
        manifestPath,
        true
      )
    }
    if (candidate.previewImage && !asset) {
      throw new Error(`${manifestPath}: ${candidate.candidateId} preview image is not manifest-owned`)
    }
  }

  const detachedLegacyPages = parseDetachedLegacyPages(manifest, date, manifestPath)
  const currentAssetPaths = new Set([...assets.values()].map((asset) => asset.path))
  for (const page of detachedLegacyPages) {
    for (const asset of page.assets) {
      if (currentAssetPaths.has(asset.path)) {
        throw new Error(`${manifestPath}: current and detached legacy assets may not share ${asset.path}`)
      }
    }
  }
  validateLegacyOwnershipReceipt(date, detachedLegacyPages)
  const compatibilityChecks = recordValue(
    manifest.compatibility_checks,
    `${manifestPath}: compatibility_checks`
  )
  exactObjectKeys(
    compatibilityChecks,
    ['detached_legacy_page_count', 'detached_legacy_asset_count'],
    `${manifestPath}: compatibility_checks`
  )
  const detachedLegacyAssetCount = detachedLegacyPages.reduce(
    (total, page) => total + page.assets.length,
    0
  )
  if (
    compatibilityChecks.detached_legacy_page_count !== detachedLegacyPages.length ||
    compatibilityChecks.detached_legacy_asset_count !== detachedLegacyAssetCount
  ) {
    throw new Error(`${manifestPath}: compatibility_checks do not match detached legacy entries`)
  }
  return {
    date,
    mode: schemaVersion === 3 ? 'v3' : 'v2',
    schemaVersion,
    candidates,
    detachedLegacyPages,
    assets,
    selectionLimit
  }
}

function parseManagedLegacy(
  manifest: Record<string, unknown>,
  date: string,
  manifestPath: string
): ManagedDay {
  validateManifestIdentity(manifest, date, manifestPath, true)
  if (!Array.isArray(manifest.articles)) {
    throw new Error(`${manifestPath}: legacy managed manifest "articles" must be an array`)
  }

  const candidates: ManagedCandidate[] = []
  const candidateIds = new Set<string>()
  const paths = new Set<string>()
  const ranks = new Set<number>()
  for (const [index, value] of manifest.articles.entries()) {
    const candidatePath = `${manifestPath}: articles[${index}]`
    const candidate = recordValue(value, candidatePath)
    const candidateId = safeCandidateId(candidate.candidate_id, 'candidate_id', candidatePath)
    const category = requiredCategory(candidate.category, candidatePath)
    const groupRank = manifestPositiveInteger(candidate.rank, 'rank', candidatePath)
    const managedPath = managedLegacyPath(candidate.path, date, candidatePath)
    validateManagedFile(
      managedPath.path,
      optionalManifestBytes(candidate, candidatePath),
      candidatePath
    )
    if (candidateIds.has(candidateId) || paths.has(managedPath.path) || ranks.has(groupRank)) {
      throw new Error(`${manifestPath}: legacy candidate IDs, paths, and ranks must be unique`)
    }
    const historicalScore = hasField(candidate, 'score')
      ? requiredNumber(candidate.score, 'score', candidatePath)
      : undefined
    candidateIds.add(candidateId)
    paths.add(managedPath.path)
    ranks.add(groupRank)
    candidates.push({
      candidateId,
      category,
      groupRank,
      groupScore: historicalScore,
      previewImageDeclared: hasField(candidate, 'preview_image'),
      previewImage: hasField(candidate, 'preview_image')
        ? validatePreviewPath(candidate.preview_image, date, candidateId, candidatePath, false)
        : undefined,
      ...managedPath
    })
  }

  const assets = parseManagedAssets(manifest, date, manifestPath, false, false)
  for (const assetCandidateId of assets.keys()) {
    if (!candidateIds.has(assetCandidateId)) {
      throw new Error(`${manifestPath}: legacy preview asset CandidateID "${assetCandidateId}" is not owned by articles`)
    }
  }
  for (const candidate of candidates) {
    const asset = assets.get(candidate.candidateId)
    if (candidate.previewImageDeclared && candidate.previewImage !== asset?.url) {
      throw new Error(`${manifestPath}: ${candidate.candidateId} preview_image must match its owned asset`)
    }
    if (!candidate.previewImageDeclared) candidate.previewImage = asset?.url
    if (candidate.previewImage && !asset) {
      throw new Error(`${manifestPath}: ${candidate.candidateId} preview image is not manifest-owned`)
    }
  }

  return { date, mode: 'legacy', candidates, detachedLegacyPages: [], assets }
}

function discoverManagedDays(): Map<string, ManagedDay> {
  const dailyDirectoryUrl = new URL('../../daily/', import.meta.url)
  const dailyDirectory = fileURLToPath(dailyDirectoryUrl)
  const managedDays = new Map<string, ManagedDay>()

  for (const entry of readdirSync(dailyDirectory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const manifestUrl = new URL(`${entry.name}/.managed-manifest.json`, dailyDirectoryUrl)
    const manifestFile = fileURLToPath(manifestUrl)
    if (!existsSync(manifestFile)) continue
    const manifestPath = `daily/${entry.name}/.managed-manifest.json`
    if (!isCalendarDate(entry.name)) {
      throw new Error(`${manifestPath}: managed manifest directory must use YYYY-MM-DD`)
    }

    let parsed: unknown
    try {
      parsed = JSON.parse(readRegularFile(manifestFile, manifestPath))
    } catch (error) {
      throw new Error(`${manifestPath}: invalid JSON: ${(error as Error).message}`)
    }
    const manifest = recordValue(parsed, manifestPath)
    if ((manifest.schema_version === 2 || manifest.schema_version === 3) && hasField(manifest, 'groups')) {
      managedDays.set(entry.name, parseManagedGrouped(manifest, entry.name, manifestPath))
      continue
    }
    if (manifest.schema_version === 1) {
      managedDays.set(entry.name, parseManagedLegacy(manifest, entry.name, manifestPath))
      continue
    }
    if (
      (
        (
          manifest.schema_version === 2 &&
          hasField(manifest, 'keyword_postprocess_receipt') &&
          hasField(manifest, 'articles')
        ) ||
        (manifest.schema_version === 3 && !hasField(manifest, 'groups'))
      )
    ) {
      managedDays.set(entry.name, parseManagedLegacy(manifest, entry.name, manifestPath))
      continue
    }
    if (manifest.schema_version === 2) {
      throw new Error(`${manifestPath}: schema_version 2 must use the canonical grouped manifest shape`)
    }
    throw new Error(`${manifestPath}: unsupported managed manifest schema_version`)
  }
  return managedDays
}

function requiredString(value: unknown, field: string, path: string): string {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${path}: front matter "${field}" must be a non-empty string`)
  }
  return value
}

function requiredNumber(value: unknown, field: string, path: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`${path}: front matter "${field}" must be a finite number`)
  }
  return value
}

function boundedGroupScore(value: unknown, path: string): number {
  const score = requiredNumber(value, 'groupScore', path)
  if (score < 0 || score > 100) {
    throw new Error(`${path}: front matter "groupScore" must be between 0 and 100`)
  }
  return score
}

function positiveInteger(value: unknown, field: string, path: string): number {
  const number = requiredNumber(value, field, path)
  if (!Number.isInteger(number) || number < 1) {
    throw new Error(`${path}: front matter "${field}" must be a positive integer`)
  }
  return number
}

function requiredCategory(value: unknown, path: string): ArticleCategory {
  if (value !== 'Paper' && value !== 'News' && value !== 'Policy') {
    throw new Error(`${path}: front matter "category" must be Paper, News, or Policy`)
  }
  return value
}

function requiredDate(value: unknown, path: string): string {
  const date = value instanceof Date && !Number.isNaN(value.valueOf())
    ? value.toISOString().slice(0, 10)
    : requiredString(value, 'date', path)
  if (!isCalendarDate(date)) {
    throw new Error(`${path}: front matter "date" must use YYYY-MM-DD`)
  }
  return date
}

function isCalendarDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00.000Z`)
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value
}

function stringList(value: unknown, field: string, path: string): string[] {
  if (
    !Array.isArray(value) ||
    value.some((item) => typeof item !== 'string' || !item.trim())
  ) {
    throw new Error(`${path}: front matter "${field}" must be an array of strings`)
  }
  return value
}

function articleKeywords(
  value: unknown,
  path: string,
  schemaVersion: 1 | 2 | 3
): string[] {
  const keywords = stringList(value, 'keywords', path)
  if (
    schemaVersion !== 1 &&
    (keywords.length < 2 || keywords.length > 5 || new Set(keywords).size !== keywords.length)
  ) {
    throw new Error(`${path}: grouped schema front matter "keywords" must contain 2-5 unique values`)
  }
  return keywords
}

function parseSources(value: unknown, path: string): ArticleSource[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`${path}: front matter "sources" must contain at least one source`)
  }

  return value.map((source, index) => {
    if (!source || typeof source !== 'object') {
      throw new Error(`${path}: source ${index + 1} must contain name and url`)
    }
    const item = source as Record<string, unknown>
    const url = requiredString(item.url, `sources[${index}].url`, path)
    if (!isPublicHttpUrl(url)) {
      throw new Error(
        `${path}: source ${index + 1} url must be valid public HTTP(S) without credentials`
      )
    }
    return {
      name: requiredString(item.name, `sources[${index}].name`, path),
      url
    }
  })
}

function markdownH2Sections(source: string, path: string): Array<{ title: string; body: string }> {
  const lines = source.replace(/\r\n?/g, '\n').split('\n')
  const sections: Array<{ title: string; body: string }> = []
  let inFence = false
  let current: { title: string; body: string[] } | undefined

  const finish = (): void => {
    if (!current) return
    const body = current.body.join('\n').trim()
    if (!body) throw new Error(`${path}: section "${current.title}" must not be empty`)
    sections.push({ title: current.title, body })
    current = undefined
  }

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      if (current) current.body.push(line)
      continue
    }
    const heading = !inFence ? line.match(/^##\s+([^#].*?)\s*#*\s*$/) : null
    if (heading) {
      finish()
      current = { title: heading[1].trim(), body: [] }
      continue
    }
    if (current) current.body.push(line)
  }
  finish()
  return sections
}

function validateMarkdownLinks(source: string, path: string): void {
  const withoutFrontmatter = source.replace(/^---\n[\s\S]*?\n---\n?/, '')
  if (
    /\bfile:\/\//i.test(withoutFrontmatter) ||
    /(^|[\s("'=])(?:\/home\/|\/Users\/|[A-Za-z]:[\\/])/.test(withoutFrontmatter) ||
    /\bcrawl_tmp(?:[\\/]|\b)/.test(withoutFrontmatter)
  ) {
    throw new Error(`${path}: Markdown must not expose a workspace or temporary path`)
  }

  const linkPattern = /!?\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)/g
  for (const match of withoutFrontmatter.matchAll(linkPattern)) {
    const target = match[1]
    if (target.startsWith('#')) continue
    if (/^https?:\/\//i.test(target)) {
      if (!isPublicHttpUrl(target)) {
        throw new Error(`${path}: external Markdown link must be public HTTP(S): ${target}`)
      }
      continue
    }
    if (
      target.startsWith('file:') ||
      target.includes('crawl_tmp') ||
      target.includes('\\') ||
      target.includes('..') ||
      target.includes('%')
    ) {
      throw new Error(`${path}: Markdown link must not leak a local or escaping path: ${target}`)
    }
    if (/^[a-z][a-z0-9+.-]*:/i.test(target)) {
      throw new Error(`${path}: Markdown link must use HTTP(S) or a local daily route: ${target}`)
    }
    let resolved: URL
    try {
      resolved = new URL(target, `https://preview.invalid${path}`)
    } catch {
      throw new Error(`${path}: invalid Markdown link: ${target}`)
    }
    if (!resolved.pathname.startsWith('/daily/')) {
      throw new Error(`${path}: local Markdown link must remain under /daily/: ${target}`)
    }
    if (resolved.search) {
      throw new Error(`${path}: local Markdown link must not contain a query: ${target}`)
    }

    const managedTarget = /^\/daily\/[^/]+\/assets\//.test(resolved.pathname)
      ? `docs/public${resolved.pathname}`
      : `docs${resolved.pathname}${resolved.pathname.endsWith('.md') ? '' : '.md'}`
    validateManagedFile(managedTarget, undefined, `${path}: local Markdown link ${target}`)
  }
}

function validateArticleMarkdown(
  source: unknown,
  path: string,
  category: ArticleCategory,
  schemaVersion: 1 | 2 | 3
): void {
  if (typeof source !== 'string' || !source.trim()) {
    throw new Error(`${path}: Markdown source must be nonempty`)
  }
  validateMarkdownLinks(source, path)
  if (schemaVersion === 1) return

  const actual = markdownH2Sections(source, path).map(({ title }) => title)
  const expected = articleSections[category]
  if (actual.length !== expected.length || actual.some((title, index) => title !== expected[index])) {
    throw new Error(
      `${path}: ${category} article H2 sections must be exactly, in order: ${expected.join(', ')}`
    )
  }
}

function isPublicHostname(value: string): boolean {
  const hostname = value.toLowerCase().replace(/^\[|\]$/g, '').replace(/\.$/, '')
  if (!hostname || hostname === 'localhost' || hostname.endsWith('.localhost')) return false

  const ipv4 = hostname.split('.').map(Number)
  if (
    ipv4.length === 4 &&
    ipv4.every((part) => Number.isInteger(part) && part >= 0 && part <= 255)
  ) {
    const [first, second] = ipv4
    return !(
      first === 0 ||
      first === 10 ||
      first === 127 ||
      (first === 169 && second === 254) ||
      (first === 172 && second >= 16 && second <= 31) ||
      (first === 192 && second === 0 && (ipv4[2] === 0 || ipv4[2] === 2)) ||
      (first === 192 && second === 168) ||
      (first === 198 && (second === 18 || second === 19 || (second === 51 && ipv4[2] === 100))) ||
      (first === 203 && second === 0 && ipv4[2] === 113) ||
      (first === 100 && second >= 64 && second <= 127) ||
      first >= 224
    )
  }

  if (hostname.includes(':')) {
    return /^[23][0-9a-f]{0,3}:/.test(hostname)
  }
  return (
    hostname.includes('.') &&
    !['.local', '.internal', '.test', '.example', '.invalid', '.home.arpa'].some((suffix) =>
      hostname.endsWith(suffix)
    )
  )
}

function isPublicHttpUrl(value: string): boolean {
  if (value !== value.trim() || !/^https?:\/\//i.test(value)) return false
  try {
    const parsed = new URL(value)
    return (
      (parsed.protocol === 'http:' || parsed.protocol === 'https:') &&
      !parsed.username &&
      !parsed.password &&
      isPublicHostname(parsed.hostname)
    )
  } catch {
    return false
  }
}

function articleSchema(frontmatter: Record<string, unknown>, path: string): 1 | 2 | 3 {
  const declared = frontmatter.schemaVersion
  if (declared !== undefined && declared !== 1 && declared !== 2 && declared !== 3) {
    throw new Error(`${path}: front matter "schemaVersion" must be 1, 2, or 3`)
  }

  const nestedRoute = path.split('/').filter(Boolean).length > 3
  const hasGroupedField = groupedFields.some((field) => hasField(frontmatter, field))
  if (declared === undefined && (nestedRoute || hasGroupedField)) {
    throw new Error(`${path}: grouped schema v2/v3 articles must declare schemaVersion: 2 or 3`)
  }

  const schemaVersion = declared ?? 1
  validateRankingFieldNames(frontmatter, schemaVersion, path)
  if (schemaVersion === 1 && hasGroupedField) {
    throw new Error(`${path}: legacy schema v1 cannot contain grouped v2/v3 fields`)
  }
  return schemaVersion
}

function validateRoute(article: LoadedArticle): void {
  const segments = article.url.split('/').filter(Boolean)
  if (segments[0] !== 'daily' || segments[1] !== article.date) {
    throw new Error(`${article.url}: route must match front matter date ${article.date}`)
  }

  if (article.schemaVersion === 1) {
    if (segments.length !== 3) {
      throw new Error(`${article.url}: legacy schema v1 articles must use daily/YYYY-MM-DD/*.md`)
    }
    return
  }

  const expectedCategoryPath = categoryOptions.find(
    ({ category }) => category === article.category
  )?.path
  if (segments.length !== 4 || segments[2] !== expectedCategoryPath) {
    throw new Error(
      `${article.url}: grouped schema ${article.category} articles must use daily/YYYY-MM-DD/${expectedCategoryPath}/*.md`
    )
  }
}

function parseArticle(url: string, rawFrontmatter: unknown, source: unknown): LoadedArticle {
  const frontmatter = rawFrontmatter as Record<string, unknown>
  const schemaVersion = articleSchema(frontmatter, url)
  const category = requiredCategory(frontmatter.category, url)
  const candidateId = safeCandidateId(frontmatter.candidateId, 'candidateId', url)
  const date = requiredDate(frontmatter.date, url)
  const categoryContract = (schemaVersion === 2 ? legacyCategoryContracts : v3CategoryContracts)[category]
  if (schemaVersion !== 1) {
    if (!hasField(frontmatter, 'previewImage')) {
      throw new Error(`${url}: grouped schema front matter must declare previewImage as a path or null`)
    }
    if (frontmatter.scoreScale !== categoryContract.scoreScale) {
      throw new Error(
        `${url}: schema v${schemaVersion} ${category} articles must use scoreScale: ${categoryContract.scoreScale}`
      )
    }
    if (frontmatter.ratingTrack !== categoryContract.ratingTrack) {
      throw new Error(
        `${url}: schema v${schemaVersion} ${category} articles must use ratingTrack: ${categoryContract.ratingTrack}`
      )
    }
  }
  const article: LoadedArticle = {
    candidateId,
    date,
    groupRank: schemaVersion !== 1
      ? positiveInteger(frontmatter.groupRank, 'groupRank', url)
      : 0,
    title: requiredString(frontmatter.title, 'title', url),
    authors: stringList(frontmatter.authors, 'authors', url),
    summary: requiredString(frontmatter.summary, 'summary', url),
    keywords: articleKeywords(frontmatter.keywords, url, schemaVersion),
    groupScore: schemaVersion !== 1
      ? boundedGroupScore(frontmatter.groupScore, url)
      : requiredNumber(frontmatter.score, 'score', url),
    scoreKind: schemaVersion !== 1 ? 'group-local' : 'historical',
    scoreScale: schemaVersion !== 1
      ? requiredString(frontmatter.scoreScale, 'scoreScale', url)
      : undefined,
    ratingTrack: schemaVersion !== 1
      ? requiredString(frontmatter.ratingTrack, 'ratingTrack', url)
      : undefined,
    sources: parseSources(frontmatter.sources, url),
    category,
    url,
    schemaVersion
  }
  if (schemaVersion === 1) {
    article.legacyRank = positiveInteger(frontmatter.rank, 'rank', url)
  }
  article.previewImage = validatePreviewPath(
    frontmatter.previewImage,
    date,
    candidateId,
    url,
    schemaVersion !== 1
  )
  validateRoute(article)
  validateArticleMarkdown(source, url, category, schemaVersion)
  return article
}

function aggregate(items: DailyArticle[], values: (article: DailyArticle) => string[]): Facet[] {
  const counts = new Map<string, number>()
  for (const article of items) {
    for (const value of new Set(values(article))) {
      counts.set(value, (counts.get(value) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], 'zh-CN'))
    .map(([name, count]) => ({ name, count }))
}

function validateDailySet(date: string, items: LoadedArticle[], mode: ManagedDay['mode']): void {
  if (mode === 'v3') {
    const paperCount = items.filter((article) => article.category === 'Paper').length
    const newsCount = items.filter((article) => article.category === 'News').length
    const policyCount = items.filter((article) => article.category === 'Policy').length
    if (items.length > 20 || paperCount > 10 || policyCount > 5 || newsCount > 10 - policyCount) {
      throw new Error(`${date}: schema v3 articles violate 20/10/5 quotas`)
    }
    return
  }
  if (items.length > 15) {
    throw new Error(`${date}: a legacy daily archive may contain at most 15 articles`)
  }
  const newsAndPolicyCount = items.filter(
    (article) => article.category === 'News' || article.category === 'Policy'
  ).length
  if (newsAndPolicyCount > 5) {
    throw new Error(`${date}: legacy News and Policy articles may total at most 5`)
  }

  const candidateIds = new Set<string>()
  for (const article of items) {
    if (candidateIds.has(article.candidateId)) {
      throw new Error(`${date}: duplicate candidateId "${article.candidateId}"`)
    }
    candidateIds.add(article.candidateId)
  }
}

function currentDailySet(
  date: string,
  items: LoadedArticle[],
  managedDay: ManagedDay
): LoadedArticle[] {
  const nestedItems = items.filter((article) => article.schemaVersion !== 1)
  const flatItems = items.filter((article) => article.schemaVersion === 1)
  if (managedDay.mode === 'legacy') {
    if (nestedItems.length) {
      throw new Error(
        `${date}: grouped schema pages require a schema_version 2/3 managed manifest with exact groups`
      )
    }
    reconcileManagedArticles(date, flatItems, managedDay.candidates, 'legacy')
    reconcileManagedAssets(date, flatItems, managedDay.assets)
    reconcileMarkdownDayFiles(date, managedDay)
    reconcilePublicAssetFiles(date, managedDay)
    return flatItems
  }

  reconcileDetachedLegacyPages(date, flatItems, managedDay.detachedLegacyPages)
  reconcileManagedArticles(date, nestedItems, managedDay.candidates, `schema ${managedDay.schemaVersion}`)
  reconcileManagedAssets(date, nestedItems, managedDay.assets)
  reconcileMarkdownDayFiles(date, managedDay)
  reconcilePublicAssetFiles(date, managedDay)
  const articlesByUrl = new Map(nestedItems.map((article) => [article.url, article]))
  const articles = managedDay.candidates.map((candidate) => articlesByUrl.get(candidate.url)!)
  for (const article of articles) {
    const asset = managedDay.assets.get(article.candidateId)
    if (article.previewImage && asset?.storagePath) article.previewImage = `/${asset.storagePath.slice('docs/public/'.length)}`
  }
  return articles
}

function reconcileManagedArticles(
  date: string,
  articles: LoadedArticle[],
  candidates: ManagedCandidate[],
  label: string
): void {
  const articlesById = new Map<string, LoadedArticle>()
  const articlesByUrl = new Map<string, LoadedArticle>()
  for (const article of articles) {
    if (articlesById.has(article.candidateId)) {
      throw new Error(`${date}: duplicate ${label} candidateId "${article.candidateId}"`)
    }
    if (articlesByUrl.has(article.url)) {
      throw new Error(`${date}: duplicate ${label} route "${article.url}"`)
    }
    articlesById.set(article.candidateId, article)
    articlesByUrl.set(article.url, article)
  }

  const manifestIds = new Set(candidates.map(({ candidateId }) => candidateId))
  const manifestUrls = new Set(candidates.map(({ url }) => url))
  const articleIds = new Set(articlesById.keys())
  const articleUrls = new Set(articlesByUrl.keys())
  assertExactSet(date, 'CandidateID', manifestIds, articleIds)
  assertExactSet(date, 'path', manifestUrls, articleUrls)

  for (const candidate of candidates) {
    const article = articlesByUrl.get(candidate.url)!
    if (
      article.candidateId !== candidate.candidateId ||
      article.category !== candidate.category ||
      (article.schemaVersion !== 1 ? article.groupRank : article.legacyRank) !== candidate.groupRank ||
      (candidate.groupScore !== undefined && article.groupScore !== candidate.groupScore) ||
      (candidate.scoreScale !== undefined && article.scoreScale !== candidate.scoreScale) ||
      (candidate.ratingTrack !== undefined && article.ratingTrack !== candidate.ratingTrack) ||
      article.previewImage !== candidate.previewImage
    ) {
      throw new Error(
        `${date}: manifest entry ${candidate.path} must match all declared Markdown identity, ranking, score, track, and preview values`
      )
    }
  }
}

function reconcileDetachedLegacyPages(
  date: string,
  articles: LoadedArticle[],
  pages: DetachedLegacyPage[]
): void {
  const articlesByUrl = new Map(articles.map((article) => [article.url, article]))
  assertExactSet(
    date,
    'detached legacy path',
    new Set(pages.map(({ url }) => url)),
    new Set(articlesByUrl.keys())
  )
  for (const page of pages) {
    const article = articlesByUrl.get(page.url)!
    if (
      article.candidateId !== page.candidateId ||
      article.category !== page.category ||
      article.previewImage !== page.previewImage
    ) {
      throw new Error(`${date}: detached legacy entry ${page.path} does not match its Markdown`)
    }
  }
}

function publicAssetFiles(date: string): { files: Set<string>; directories: Set<string> } {
  const rootPath = `docs/public/daily/${date}/assets`
  const root = nodePath.resolve(repositoryRoot, rootPath)
  let rootStats: ReturnType<typeof lstatSync>
  try {
    rootStats = lstatSync(root)
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code
    if (code === 'ENOENT') return { files: new Set(), directories: new Set() }
    throw new Error(`${date}: cannot inspect public asset root: ${(error as Error).message}`)
  }
  if (rootStats.isSymbolicLink() || !rootStats.isDirectory()) {
    throw new Error(`${date}: public asset root must be a regular non-symlink directory`)
  }

  const repositoryPath = nodePath.relative(repositoryRoot, root)
  if (
    nodePath.isAbsolute(repositoryPath) ||
    repositoryPath.startsWith(`..${nodePath.sep}`)
  ) {
    throw new Error(`${date}: public asset root must remain inside the repository`)
  }

  const rootParts = root
    .slice(nodePath.parse(root).root.length)
    .split(nodePath.sep)
    .filter(Boolean)
  let ancestor = nodePath.parse(root).root
  for (const segment of rootParts) {
    ancestor = nodePath.join(ancestor, segment)
    const stats = lstatSync(ancestor)
    if (stats.isSymbolicLink()) {
      throw new Error(`${date}: public assets may not have a symlink at ${ancestor}`)
    }
  }

  const files = new Set<string>()
  const directories = new Set<string>()
  const visit = (directory: string): void => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const entryPath = nodePath.join(directory, entry.name)
      const stats = lstatSync(entryPath)
      if (stats.isSymbolicLink()) {
        throw new Error(`${date}: public assets may not contain symlink ${entryPath}`)
      }
      if (stats.isDirectory()) {
        directories.add(nodePath.relative(repositoryRoot, entryPath).split(nodePath.sep).join('/'))
        visit(entryPath)
      } else if (stats.isFile()) {
        files.add(
          nodePath.relative(repositoryRoot, entryPath).split(nodePath.sep).join('/')
        )
      } else {
        throw new Error(`${date}: public assets may contain only regular files and directories`)
      }
    }
  }
  visit(root)
  return { files, directories }
}

function reconcilePublicAssetFiles(date: string, managedDay: ManagedDay): void {
  const expected = new Set(managedDay.assets.values().map((asset) => asset.path))
  for (const page of managedDay.detachedLegacyPages) {
    for (const asset of page.assets) expected.add(asset.path)
  }
  const storageExpected = new Set(managedDay.assets.values().map((asset) => asset.storagePath ?? asset.path))
  const expectedDirectories = new Set([...storageExpected].map((path) => nodePath.posix.dirname(path)))
  const actual = publicAssetFiles(date)
  assertExactSet(date, 'public asset path', storageExpected, actual.files)
  assertExactSet(date, 'public asset directory', expectedDirectories, actual.directories)
}

function reconcileMarkdownDayFiles(date: string, managedDay: ManagedDay): void {
  const dayRoot = nodePath.resolve(repositoryRoot, `docs/daily/${date}`)
  const files = new Set<string>()
  const allowedDirectories = managedDay.mode !== 'legacy'
    ? new Set(categoryOptions.map(({ path }) => path))
    : new Set<string>()

  for (const entry of readdirSync(dayRoot, { withFileTypes: true })) {
    const entryPath = nodePath.join(dayRoot, entry.name)
    const stats = lstatSync(entryPath)
    if (stats.isSymbolicLink()) {
      throw new Error(`${date}: managed Markdown day may not contain symlink ${entry.name}`)
    }
    if (stats.isDirectory()) {
      if (!allowedDirectories.has(entry.name)) {
        throw new Error(`${date}: unowned directory in managed Markdown day: ${entry.name}`)
      }
      for (const child of readdirSync(entryPath, { withFileTypes: true })) {
        const childPath = nodePath.join(entryPath, child.name)
        const childStats = lstatSync(childPath)
        if (childStats.isSymbolicLink() || !childStats.isFile() || !child.name.endsWith('.md')) {
          throw new Error(`${date}: category directories may contain only regular Markdown files`)
        }
        files.add(nodePath.relative(repositoryRoot, childPath).split(nodePath.sep).join('/'))
      }
      continue
    }
    if (!stats.isFile()) {
      throw new Error(`${date}: managed Markdown day may contain only regular files and directories`)
    }
    files.add(nodePath.relative(repositoryRoot, entryPath).split(nodePath.sep).join('/'))
  }

  const expected = new Set<string>([
    `docs/daily/${date}/.managed-manifest.json`,
    ...managedDay.candidates.map(({ path }) => path),
    ...managedDay.detachedLegacyPages.map(({ path }) => path)
  ])
  if (managedDay.detachedLegacyPages.length) expected.add(detachedLegacyReceiptPath(date))
  assertExactSet(date, 'Markdown day path', expected, files)
}

function reconcileManagedAssets(
  date: string,
  articles: LoadedArticle[],
  assets: ReadonlyMap<string, ManagedAsset>
): void {
  const referencedAssets = new Set<string>()
  for (const article of articles) {
    if (!article.previewImage) continue
    const asset = assets.get(article.candidateId)
    if (asset?.url !== article.previewImage) {
      throw new Error(`${date}: ${article.url} previewImage is not manifest-owned`)
    }
    referencedAssets.add(asset.storagePath ?? asset.path)
  }

  const unreferenced = [...assets.values()]
    .filter((asset) => !referencedAssets.has(asset.storagePath ?? asset.path))
    .map((asset) => asset.storagePath ?? asset.path)
  if (unreferenced.length) {
    throw new Error(`${date}: manifest contains unreferenced preview assets [${unreferenced.join(', ')}]`)
  }
}

function assertExactSet(
  date: string,
  label: string,
  expected: ReadonlySet<string>,
  actual: ReadonlySet<string>
): void {
  const missing = [...expected].filter((value) => !actual.has(value))
  const unowned = [...actual].filter((value) => !expected.has(value))
  if (missing.length || unowned.length) {
    throw new Error(
      `${date}: managed ${label} set mismatch; missing [${missing.join(', ')}], unowned [${unowned.join(', ')}]`
    )
  }
}

function buildSections(date: string, items: LoadedArticle[]): DailySection[] {
  const schemaVersion = items[0]?.schemaVersion
  if (schemaVersion === 1) {
    const legacyRanks = new Set<number>()
    for (const article of items) {
      if (legacyRanks.has(article.legacyRank!)) {
        throw new Error(`${date}: duplicate legacy rank ${article.legacyRank}`)
      }
      legacyRanks.add(article.legacyRank!)
    }
  }

  return categoryOptions.map(({ category, label }) => {
    const articles = items.filter((article) => article.category === category)
    if (schemaVersion === 1) {
      articles.sort((left, right) => left.legacyRank! - right.legacyRank!)
      articles.forEach((article, index) => {
        article.groupRank = index + 1
      })
    } else {
      const groupRanks = new Set<number>()
      for (const [index, article] of articles.entries()) {
        if (groupRanks.has(article.groupRank)) {
          throw new Error(`${date} ${category}: duplicate groupRank ${article.groupRank}`)
        }
        groupRanks.add(article.groupRank)
        if (article.groupRank !== index + 1) {
          throw new Error(
            `${date} ${category}: groupRank values must be contiguous from 1; expected ${index + 1}, got ${article.groupRank}`
          )
        }
      }
    }

    return { category, label, articles }
  })
}

// createContentLoader watches this Markdown glob, not manifests or public assets; restart dev
// after changing those files so the filesystem reconciliation runs again.
export default createContentLoader('daily/**/*.md', {
  includeSrc: true,
  transform(pages): DailyArchive {
    const managedDays = discoverManagedDays()
    const articles = pages.map(({ url, frontmatter, src }) => parseArticle(url, frontmatter, src))
    const grouped = new Map<string, LoadedArticle[]>()
    for (const article of articles) {
      const items = grouped.get(article.date) ?? []
      items.push(article)
      grouped.set(article.date, items)
    }

    for (const date of grouped.keys()) {
      if (!managedDays.has(date)) {
        throw new Error(`${date}: daily pages require daily/${date}/.managed-manifest.json`)
      }
    }

    const dates = [...managedDays.entries()]
      .sort(([left], [right]) => right.localeCompare(left))
      .map(([date, managedDay]) => {
        const currentItems = currentDailySet(date, grouped.get(date) ?? [], managedDay)
        validateDailySet(date, currentItems, managedDay.mode)
        return {
          date,
          articleCount: currentItems.length,
          sections: buildSections(date, currentItems),
          keywords: aggregate(currentItems, (article) => article.keywords)
        }
      })

    return {
      dates,
      articleCount: dates.reduce((total, date) => total + date.articleCount, 0)
    }
  }
})
