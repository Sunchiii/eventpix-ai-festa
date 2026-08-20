import { chromium } from 'playwright-chromium'
import fs from 'node:fs'

/*
 * Layout check: how close does each slide's content come to the bottom of the 980x552 canvas?
 * Start `pnpm dev`, then `node scripts/measure-slides.mjs`. Target band is 470-512 (512 = the
 * canvas minus `.slidev-layout`'s py-10); over 552 is clipped. See CLAUDE.md, "Vertical rhythm".
 * Env: BASE, OUT, TOTAL, TAG.
 */

const BASE = process.env.BASE || 'http://localhost:3030'
const OUT = process.env.OUT || '.'
const TOTAL = Number(process.env.TOTAL || 15)
// Slidev canvas
const W = 980, H = 552, PAD_BOTTOM = 40

fs.mkdirSync(`${OUT}/shots`, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 })

const rows = []
for (let n = 1; n <= TOTAL; n++) {
  await page.goto(`${BASE}/${n}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  // reveal every v-click: step forward until the click walks onto the next slide, then step back
  const slideOf = () => page.evaluate(() => Number(location.pathname.split('/').filter(Boolean)[0]))
  for (let i = 0; i < 20; i++) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(300)
    if (await slideOf() !== n) {
      await page.keyboard.press('ArrowLeft')
      await page.waitForTimeout(450)
      break
    }
  }
  await page.waitForTimeout(500)
  const at = await slideOf()
  if (at !== n) throw new Error(`expected slide ${n}, on ${at}`)

  const data = await page.evaluate(({ W, H }) => {
    // several .slidev-layout nodes exist (pre-rendered neighbours); take the visible one
    const slide = [...document.querySelectorAll('.slidev-layout')]
      .find(el => el.getBoundingClientRect().height > 100)
    if (!slide) return null
    const top = slide.getBoundingClientRect().top
    const left = slide.getBoundingClientRect().left
    const SKIP = ['.scrim', '.ep-scan', '.ep-mosaic', '.slidev-page-number', 'footer', '.slidev-controls']
    const inSkip = (el) => SKIP.some(sel => el.closest(sel))
    const positioned = (el) => {
      for (let e = el; e && e !== slide; e = e.parentElement) {
        const pos = getComputedStyle(e).position
        if (pos === 'absolute' || pos === 'fixed') return true
      }
      return false
    }
    const measure = (root) => {
      let bottom = -Infinity, who = null
      // text runs, measured with a Range so inline wrapping is exact
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        if (!node.nodeValue.trim()) continue
        const el = node.parentElement
        if (!el || inSkip(el) || positioned(el)) continue
        const cs = getComputedStyle(el)
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue
        const range = document.createRange()
        range.selectNodeContents(node)
        for (const r of range.getClientRects()) {
          if (r.height === 0) continue
          if (r.bottom - top > bottom) { bottom = r.bottom - top; who = 'text: ' + node.nodeValue.trim().slice(0, 40) }
        }
      }
      // media
      for (const el of root.querySelectorAll('img, video, svg, canvas')) {
        if (inSkip(el) || positioned(el)) continue
        const cs = getComputedStyle(el)
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue
        const r = el.getBoundingClientRect()
        if (r.height === 0) continue
        if (r.bottom - top > bottom) { bottom = r.bottom - top; who = el.tagName.toLowerCase() + ' ' + (el.getAttribute('src') || '').slice(-28) }
      }
      // boxes that draw their own background/border (cards) count too
      for (const el of root.querySelectorAll('*')) {
        if (inSkip(el) || positioned(el)) continue
        const cs = getComputedStyle(el)
        if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue
        const paints = (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent')
          || (cs.boxShadow && cs.boxShadow !== 'none')
          || (cs.borderBottomWidth !== '0px' && cs.borderBottomStyle !== 'none')
        if (!paints) continue
        const r = el.getBoundingClientRect()
        if (r.height === 0 || r.height > 500) continue
        if (r.bottom - top > bottom) { bottom = r.bottom - top; who = 'box ' + el.className?.toString?.().slice(0, 40) }
      }
      return { bottom: Math.round(bottom), who }
    }
    const cols = {}
    for (const key of ['col-left', 'col-right', 'col-header']) {
      const el = slide.querySelector('.' + key)
      if (el) cols[key] = measure(el)
    }
    return {
      layout: [...slide.classList].join(' '),
      all: measure(slide),
      cols,
    }
  }, { W, H })

  await page.screenshot({ path: `${OUT}/shots/slide-${String(n).padStart(2, '0')}.png` })
  rows.push({ n, ...data })
}

await browser.close()

const line = (r) => {
  const b = r.all.bottom
  const over = b - (H - PAD_BOTTOM)
  const flag = b > H ? 'CLIPPED' : over > 0 ? 'in-pad' : b < 455 ? 'dead-space' : 'ok'
  const cols0 = Object.entries(r.cols).filter(([k]) => k !== 'col-header')
    .map(([k, v]) => `${k.replace('col-', '')}=${v.bottom}`).join(' ')
  const cols = cols0
  return `${String(r.n).padStart(2)}  bottom=${String(b).padStart(4)}  gap=${String(H - b).padStart(4)}  ${flag.padEnd(11)} ${cols}  | ${r.all.who}`
}
const report = rows.map(line).join('\n')
console.log(`slide  contentBottom (canvas ${H}, safe ${H - PAD_BOTTOM})\n` + report)
fs.writeFileSync(`${OUT}/measure-${process.env.TAG || 'run'}.txt`, report + '\n')
