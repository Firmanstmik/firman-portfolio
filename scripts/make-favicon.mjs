import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const abs = path.resolve('public/img/profil.webp')
const dataUrl = `data:image/webp;base64,${fs.readFileSync(abs).toString('base64')}`

async function shot(size, out, radius) {
  const browser = await chromium.launch({ channel: 'chrome', headless: true })
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 2,
  })

  await page.setContent(`<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body style="margin:0;background:#fff">
    <div id="c" style="width:${size}px;height:${size}px;border-radius:${radius};overflow:hidden;background:#b91c1c">
      <img src="${dataUrl}" alt="" width="${size}" height="${size}" style="display:block;width:100%;height:100%;object-fit:cover;object-position:center 18%" />
    </div>
  </body>
</html>`)

  await page.waitForFunction(() => {
    const img = document.querySelector('img')
    return img && img.complete && img.naturalWidth > 0
  })
  await page.waitForTimeout(200)
  await page.locator('#c').screenshot({ path: out })
  await browser.close()
  console.log('wrote', out, fs.statSync(out).size)
}

await shot(64, 'public/favicon.png', '18%')
await shot(180, 'public/apple-touch-icon.png', '22%')
await shot(512, 'public/favicon-512.png', '22%')
