'use client'

import { Menu, X, Code2, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#testimonials', label: 'Testimonials' },
] as const

const ease = [0.22, 1, 0.36, 1] as const

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

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        open
          ? 'border-b border-white/10 bg-[#05070d]'
          : scrolled
            ? 'border-b border-white/8 bg-[#05070d]/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="section-pad container-max relative z-20 flex h-14 w-full max-w-full items-center justify-between gap-2 sm:h-[4.5rem] sm:gap-3">
        <Link
          href="/#home"
          onClick={() => setOpen(false)}
          className="inline-flex min-w-0 shrink items-center gap-2 font-semibold tracking-[0.04em] sm:gap-2.5"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent-soft text-accent sm:size-9 sm:rounded-xl">
            <Code2 className="size-3.5 sm:size-4" aria-hidden />
          </span>
          <span className="truncate text-[0.82rem] sm:text-[0.95rem]">
            <span className="text-white">FIRMAN</span>
            <span className="text-accent">LABS</span>
          </span>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex xl:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.88rem] text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#contact"
            className="btn-primary btn-nav max-md:hidden md:inline-flex"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>

          <button
            type="button"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white transition-colors hover:border-white/20 hover:bg-white/[0.08] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
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
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-10 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease }}
          >
            {/* Solid opaque panel — never rely on translucent tokens on mobile */}
            <div className="absolute inset-0 bg-[#05070d]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(47,128,255,0.16),transparent_55%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-accent/[0.07] to-transparent"
            />

            <motion.div
              className="section-pad relative flex h-full flex-col pt-20 pb-8 sm:pt-24"
              initial={reduce ? false : { y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.38, ease, delay: reduce ? 0 : 0.04 }}
            >
              <p className="mb-5 text-[0.72rem] font-semibold tracking-[0.18em] text-accent uppercase">
                Navigate
              </p>

              <nav className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: reduce ? 0 : 0.08 + i * 0.055,
                      duration: 0.4,
                      ease,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-2xl border border-transparent px-3 py-3.5 transition-colors hover:border-white/10 hover:bg-white/[0.04] active:bg-white/[0.06]"
                    >
                      <span className="text-[1.65rem] leading-none font-semibold tracking-[-0.03em] text-white sm:text-[1.85rem]">
                        {link.label}
                      </span>
                      <span className="font-mono text-[0.7rem] text-white/25 transition-colors group-hover:text-accent/70">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-auto space-y-4 pt-8"
                initial={reduce ? false : { y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: reduce ? 0 : 0.38,
                  duration: 0.4,
                  ease,
                }}
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
                <p className="text-center text-[0.78rem] text-white/40">
                  Available for international projects
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
