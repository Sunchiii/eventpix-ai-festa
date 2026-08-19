// Rewrites root-absolute references to files in `public/` so they resolve under a
// subpath deploy (GitHub Pages project site). Vite prefixes its own emitted asset
// URLs with the base, but literal `/landing/...` strings in the compiled slide
// chunks and `url(/eventpix-logo.svg)` in the CSS are left untouched — they would
// 404 under `/eventpix-ai-festa/`. Idempotent: safe to run twice, and safe on the
// index.html hrefs Vite already prefixed.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const base = process.env.DEPLOY_BASE ?? '/eventpix-ai-festa/'
const dist = process.env.DIST_DIR ?? 'dist'

if (!base.startsWith('/') || !base.endsWith('/'))
  throw new Error(`DEPLOY_BASE must start and end with "/" (got ${base})`)

const prefix = base.slice(0, -1) // "/eventpix-ai-festa"
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Everything in public/ that the sources reference by absolute path.
const targets = ['/landing/', '/eventpix-logo.svg']
const rules = targets.map((t) => ({
  re: new RegExp(`(?<!${escape(prefix)})${escape(t)}`, 'g'),
  to: prefix + t,
}))

const exts = ['.html', '.js', '.css']
const alreadyRe = new RegExp(
  targets.map((t) => escape(prefix + t)).join('|'),
  'g',
)
let files = 0
let hits = 0
let already = 0

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(path)
      continue
    }
    if (!exts.some((e) => entry.name.endsWith(e))) continue

    const before = readFileSync(path, 'utf8')
    already += (before.match(alreadyRe) ?? []).length
    let after = before
    let n = 0
    for (const { re, to } of rules) {
      after = after.replace(re, () => {
        n++
        return to
      })
    }
    if (n > 0) {
      writeFileSync(path, after)
      files++
      hits += n
    }
  }
}

walk(dist)

if (hits === 0) {
  // Nothing to do is only fine if the paths are already based (a re-run); a build
  // with neither form means the source paths moved and this script went stale.
  if (already === 0)
    throw new Error(`fix-base: no public-asset paths found in ${dist}/ — did the build change?`)
  console.log(`fix-base: ${dist}/ already on base ${base} (${already} path(s)), nothing to do`)
} else {
  console.log(`fix-base: rewrote ${hits} path(s) across ${files} file(s) to base ${base}`)
}
