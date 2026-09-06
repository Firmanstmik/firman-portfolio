'use client'

import { Menu, X, Code2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SITE } from '@/data/site'
import { cn } from '@/lib/utils'

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#testimonials', label: 'Testimonials' },
] as const

export function Navbar() {
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-white/8 bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="section-pad container-max relative grid h-16 grid-cols-[1fr_auto] items-center gap-4 sm:h-[4.25rem] lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/#home" className="inline-flex items-center gap-2.5 font-semibold tracking-[0.08em]">
          <span className="grid size-8 place-items-center rounded-lg border border-accent/30 bg-accent-soft text-accent">
            <Code2 className="size-4" aria-hidden />
          </span>
          <span className="text-[0.82rem]">{SITE.name}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.86rem] text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <Link
            href="/#contact"
            className="hidden items-center gap-1.5 rounded-full border border-white/12 px-4 py-2 text-[0.8rem] font-semibold text-text transition-colors hover:border-accent/40 hover:text-accent sm:inline-flex"
          >
            Let&apos;s Talk
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-text lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-0 top-16 bottom-0 bg-bg/98 backdrop-blur-2xl lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="section-pad flex h-full flex-col gap-2 py-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-4 text-2xl font-semibold tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-auto"
              >
                Let&apos;s Talk
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
