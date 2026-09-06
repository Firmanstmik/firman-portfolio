import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const src = path.resolve('public/projects/guruhub.jpg')
const buf = fs.readFileSync(src)
const isPng = buf[0] === 0x89 && buf[1] === 0x50
console.log({ isPng, size: buf.length })

if (!isPng) {
  console.log('already jpeg')
  process.exit(0)
}

const dataUrl = `data:image/png;base64,${buf.toString('base64')}`
const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 })
await page.setContent(`<!doctype html><html><body style="margin:0;background:#111">
  <img id="i" src="${dataUrl}" style="max-width:1440px;width:100%;height:auto;display:block" />
</body></html>`)
await page.waitForFunction(() => {
  const img = document.querySelector('img')
  return Boolean(img && img.complete && img.naturalWidth > 0)
})
const box = await page.locator('#i').boundingBox()
if (!box) throw new Error('no box')
await page.setViewportSize({ width: Math.ceil(box.width), height: Math.ceil(box.height) })
await page.locator('#i').screenshot({ path: 'public/projects/guruhub.jpg', type: 'jpeg', quality: 88 })
await browser.close()
console.log('converted', fs.statSync('public/projects/guruhub.jpg').size)
