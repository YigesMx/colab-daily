// A commit-bound artifact is produced AFTER build, never committed into itself.
import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { existsSync, lstatSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const dist = join(root, 'docs/.vitepress/dist')
const inputPath = join(dist, 'release-input.json')
const canonical = value => value && typeof value === 'object'
  ? Array.isArray(value) ? `[${value.map(canonical).join(',')}]`
    : `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`
  : JSON.stringify(value)
const hash = bytes => createHash('sha256').update(bytes).digest('hex')
if (existsSync(inputPath)) {
  const input = JSON.parse(readFileSync(inputPath, 'utf8'))
  if (input.schema_version !== 2 || !/^\d{4}-\d{2}-\d{2}$/.test(input.display_date)) throw new Error('Invalid release input')
  const git = expression => execFileSync('git', ['rev-parse', expression], { cwd: root, encoding: 'utf8' }).trim()
  const files = {}
  const visit = directory => {
    for (const name of readdirSync(directory).sort()) {
      const path = join(directory, name)
      const stat = lstatSync(path)
      if (stat.isSymbolicLink()) throw new Error('Artifact symlink forbidden')
      if (stat.isDirectory()) visit(path)
      else if (stat.isFile()) {
        const logical = relative(dist, path).split('\\').join('/')
        if (logical === 'release-artifact.json') continue
        if (!/^[A-Za-z0-9._~/-]+$/.test(logical) || logical.split('/').some(x => x === '..')) throw new Error('Unsafe artifact path')
        const bytes = readFileSync(path)
        files[logical] = { sha256: hash(bytes), size: bytes.length }
      } else throw new Error('Nonregular artifact file')
    }
  }
  visit(dist)
  const manifest = { schema_version: 2, display_date: input.display_date,
    commit_sha: git('HEAD'), source_tree_sha: git('HEAD^{tree}'), artifact_sha256: hash(canonical(files)), files }
  writeFileSync(join(dist, 'release-artifact.json'), canonical(manifest) + '\n')
}
