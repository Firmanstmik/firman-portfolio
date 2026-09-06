import { chromium } from 'playwright'
import path from 'node:path'

const targets = [
  {
    id: 'lombokrental',
    url: 'https://lombokrental.com/',
    ready: async (page) => {
      // Wait until the full-screen LOADING overlay is gone
      await page
        .waitForFunction(
          () => {
            const text = (document.body?.innerText || '').toLowerCase()
            const stillLoading =
              text.includes('\nloading\n') ||
              /^loading$/m.test(text) ||
              !!document.querySelector('[class*="loader"], [class*="Loader"], .loading-screen')
            const hasHero =
              !!document.querySelector('h1') ||
              /car rental|lombok rentals|sewa mobil/i.test(text)
            return !stillLoading && hasHero
          },
          { timeout: 120000 },
        )
        .catch(() => {})
      await page.waitForTimeout(4000)
    },
  },
  {
    id: 'guruhub',
    url: 'https://www.guruhub.co.id/',
    ready: async (page) => {
      // Prefer landing homepage — wait for main CTA / hero copy
      await page
        .waitForFunction(
          () => {
            const text = document.body?.innerText || ''
            return (
              /belajar dari para ahli|mulai belajar|bergabung sebagai pengajar|guruhub/i.test(
                text,
              ) && !/memuat guruhub/i.test(text)
            )
          },
          { timeout: 90000 },
        )
        .catch(() => {})
      // If stuck on subject picker modal, close or go home
      const close = page.locator('button[aria-label*="close" i], button:has-text("×")').first()
      if (await close.isVisible().catch(() => false)) {
        await close.click().catch(() => {})
      }
      await page.goto('https://www.guruhub.co.id/', { waitUntil: 'domcontentloaded' }).catch(() => {})
      await page.waitForTimeout(5000)
      await page
        .waitForSelector('h1', { timeout: 30000 })
        .catch(() => {})
      await page.waitForTimeout(3000)
    },
  },
]

async function captureOne(browser, site) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.25,
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  page.setDefaultTimeout(120000)
  console.log(`Capturing ${site.id}...`)
  await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 90000 })
  await page.waitForLoadState('load').catch(() => {})
  if (site.ready) await site.ready(page)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(1500)
  await page.screenshot({
    path: path.resolve('public/projects', `${site.id}.jpg`),
    type: 'jpeg',
    quality: 88,
    animations: 'disabled',
    timeout: 90000,
  })
  console.log(`✓ ${site.id}`)
  await context.close()
}

const browser = await chromium.launch({ channel: 'chrome', headless: true })
for (const site of targets) {
  try {
    await captureOne(browser, site)
  } catch (err) {
    console.error(`✗ ${site.id}:`, err.message)
  }
}
await browser.close()
console.log('Done.')
