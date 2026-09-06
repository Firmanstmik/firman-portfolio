import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PROFILE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'
import { AnimatePresence, motion, useReducedMotion } from './ui'

const links = [
  { href: '#about', key: 'nav.about' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#projects', key: 'nav.work' },
  { href: '#process', key: 'nav.process' },
] as const

export function Nav() {
  const { t, lang, setLang } = useLanguage()
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled || open
          ? 'border-b border-line/80 bg-canvas/92 shadow-[0_10px_30px_-24px_rgba(10,10,11,0.35)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="section-pad mx-auto flex h-[3.75rem] max-w-[1280px] items-center justify-between gap-3 sm:h-[4.25rem]">
        <motion.a
          href="#hero"
          className="font-display text-[1.1rem] font-bold tracking-[-0.04em] text-ink sm:text-[1.15rem]"
          onClick={close}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          {PROFILE.name.split(' ')[0]}
          <span className="text-accent">.</span>
        </motion.a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <motion.a
                href={link.href}
                className="group relative text-[0.86rem] font-medium text-muted transition-colors hover:text-ink"
                whileHover={reduce ? undefined : { y: -1 }}
              >
                {t(link.key)}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="sr-only" htmlFor="lang-select">
            Language
          </label>
          <select
            id="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="cursor-pointer rounded-[10px] border border-line bg-surface/90 px-2.5 py-2 text-[0.78rem] text-ink outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>

          <motion.a
            href="#contact"
            className="hidden rounded-[10px] bg-ink px-4 py-2.5 text-[0.8rem] font-semibold text-white sm:inline-flex"
            whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
          >
            {t('nav.hire')}
          </motion.a>

          <motion.button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[10px] border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            whileTap={reduce ? undefined : { scale: 0.94 }}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-x-0 top-[3.75rem] bottom-0 z-40 bg-canvas/98 backdrop-blur-2xl lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-pad flex h-full flex-col pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <div className="flex flex-1 flex-col gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="rounded-[14px] border border-transparent px-4 py-4 font-display text-[1.55rem] font-bold tracking-[-0.03em] text-ink active:bg-surface"
                    initial={reduce ? false : { x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.32 }}
                  >
                    {t(link.key)}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={close}
                className="btn-primary mt-4"
                initial={reduce ? false : { y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.3 }}
              >
                {t('nav.hire')}
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}
