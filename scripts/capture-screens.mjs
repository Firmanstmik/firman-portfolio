import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const sites = [
  {
    id: 'lirep',
    url: 'https://lirepglobal.com/',
    settleMs: 9000,
    ready: async (page) => {
      // Wait for hero headline + at least one large media asset
      await page.waitForSelector('h1, [class*="hero"]', { timeout: 30000 }).catch(() => {})
      await page
        .waitForFunction(
          () => {
            const imgs = [...document.images].filter((i) => i.naturalWidth > 200)
            const videos = [...document.querySelectorAll('video')]
            const videoReady = videos.some(
              (v) => v.readyState >= 2 || (v.poster && v.poster.length > 0),
            )
            const hasCanvas = !!document.querySelector('canvas')
            return imgs.length >= 1 || videoReady || hasCanvas
          },
          { timeout: 40000 },
        )
        .catch(() => {})
    },
  },
  { id: 'lokaclean', url: 'https://www.lokaclean.com/', settleMs: 6000 },
  { id: 'ayatfood', url: 'https://ipekcislachterij.localclicks.nl/', settleMs: 5000 },
  { id: 'keukencentrum', url: 'https://keuken-centrum.localclicks.nl/', settleMs: 5000 },
  {
    id: 'lombokrental',
    url: 'https://lombokrental.com/',
    settleMs: 3000,
    ready: async (page) => {
      // Site often shows a full-screen loader for a long time in headless.
      await page
        .waitForFunction(
          () => !!document.querySelector('h1') && /car rental|lombok rentals|sewa mobil/i.test(document.body?.innerText || ''),
          { timeout: 90000 },
        )
        .catch(() => {})

      // Force-remove leftover loaders / WP admin chrome if still present
      await page.evaluate(() => {
        document.getElementById('wpadminbar')?.remove()
        document.documentElement.style.marginTop = '0'
        document.querySelectorAll('body > *').forEach((el) => {
          const text = (el.textContent || '').trim().toLowerCase()
          const style = getComputedStyle(el)
          if (
            (style.position === 'fixed' || style.position === 'absolute') &&
            (text === 'loading' || /^loading$/i.test(text)) &&
            el.getBoundingClientRect().height > window.innerHeight * 0.5
          ) {
            el.remove()
          }
        })
      })
      await page.waitForTimeout(2000)
    },
  },
  {
    id: 'guruhub',
    url: 'https://www.guruhub.co.id/',
    settleMs: 4000,
    ready: async (page) => {
      await page.waitForSelector('h1', { timeout: 60000 }).catch(() => {})
      await page
        .waitForFunction(
          () => /belajar dari para ahli|mulai belajar|bergabung sebagai pengajar/i.test(document.body?.innerText || ''),
          { timeout: 60000 },
        )
        .catch(() => {})
    },
  },
  { id: 'snischool', url: 'https://www.snischool.com/', settleMs: 7000 },
  { id: 'nutresion', url: 'https://nutresion.com/login', settleMs: 4000 },
  { id: 'subsector', url: 'https://subsector.ukonnect.id/', settleMs: 6000 },
  { id: 'whitelabelai', url: 'https://whitelabelai-delta.vercel.app/', settleMs: 5000 },
  { id: 'officeimage', url: 'https://officeimagenl.vercel.app/', settleMs: 5000 },
  { id: 'rijschool', url: 'https://rijschool-via-via.vercel.app/', settleMs: 5000 },
  { id: 'ukonnect', url: 'https://ukonnect.ai/en/about', settleMs: 5000 },
  { id: 'reinas', url: 'https://reinas-bv.ukonnect.nl/', settleMs: 4000 },
]

const outDir = path.resolve('public/projects')

async function dismissOverlays(page) {
  for (const label of ['Accept', 'Agree', 'Allow all', 'Allow', 'Terima', 'Setuju', 'OK', 'Got it', 'Close']) {
    const btn = page.getByRole('button', { name: new RegExp(`^${label}$`, 'i') }).first()
    if (await btn.isVisible().catch(() => false)) {
      await btn.click({ timeout: 1500 }).catch(() => {})
      break
    }
  }
}

async function waitUntilFullyReady(page, site) {
  // Avoid networkidle — analytics/websockets keep many sites "busy" forever.
  await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 90000 })
  await page.waitForLoadState('load', { timeout: 60000 }).catch(() => {})

  await dismissOverlays(page)

  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      try {
        await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))])
      } catch {
        /* ignore */
      }
    }

    const imgs = [...document.images].slice(0, 20)
    await Promise.all(
      imgs.map(
        (img) =>
          img.complete && img.naturalWidth > 0
            ? Promise.resolve()
            : new Promise((resolve) => {
                const done = () => resolve()
                img.addEventListener('load', done, { once: true })
                img.addEventListener('error', done, { once: true })
                setTimeout(done, 10000)
              }),
      ),
    )

    document.querySelectorAll('video').forEach((v) => {
      try {
        v.muted = true
        v.pause()
      } catch {
        /* ignore */
      }
    })
  })

  // Wait until obvious loading UI / intro copy is gone
  await page
    .waitForFunction(
      () => {
        const text = (document.body?.innerText || '').slice(0, 2500).toLowerCase()
        if (
          text.includes('preparing your view') ||
          text.includes('please wait') ||
          text.includes('memuat')
        ) {
          return false
        }
        const busy = document.querySelectorAll(
          '[aria-busy="true"], [class*="skeleton"], [class*="Skeleton"]',
        )
        // Ignore tiny decorative pulses; fail only if several large pulse blocks exist
        const pulses = [...document.querySelectorAll('.animate-pulse')].filter((el) => {
          const r = el.getBoundingClientRect()
          return r.width > 120 && r.height > 80
        })
        return busy.length === 0 && pulses.length === 0
      },
      { timeout: 40000 },
    )
    .catch(() => {})

  if (site.ready) await site.ready(page)

  const settle = site.settleMs ?? 5000
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(settle)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(600)
}

async function capture() {
  await mkdir(outDir, { recursive: true })
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  })
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.25,
    reducedMotion: 'reduce',
  })

  for (const site of sites) {
    const page = await context.newPage()
    page.setDefaultTimeout(90000)
    const file = path.join(outDir, `${site.id}.jpg`)
    try {
      console.log(`Capturing ${site.id}...`)
      await waitUntilFullyReady(page, site)
      await page.screenshot({
        path: file,
        type: 'jpeg',
        quality: 88,
        fullPage: false,
        animations: 'disabled',
        timeout: 90000,
      })
      console.log(`✓ ${site.id}`)
    } catch (err) {
      console.error(`✗ ${site.id}:`, err.message)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  console.log('Done.')
}

capture()
