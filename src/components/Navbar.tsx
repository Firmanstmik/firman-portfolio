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
          ? 'border-b border-white/8 bg-bg/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="section-pad container-max relative flex h-14 items-center justify-between gap-3 sm:h-[4.5rem]">
        <Link
          href="/#home"
          className="inline-flex min-w-0 items-center gap-2 font-semibold tracking-[0.04em] sm:gap-2.5"
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
          <Link href="/#contact" className="btn-primary btn-nav hidden md:inline-flex">
            <span>Hire Me</span>
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white lg:hidden"
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
            className="fixed inset-x-0 top-14 bottom-0 bg-bg/98 backdrop-blur-2xl sm:top-[4.5rem] lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="section-pad flex h-full flex-col gap-1 py-6">
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
                    className="block rounded-2xl px-2 py-3.5 text-xl font-semibold tracking-tight sm:text-2xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-auto mb-6 w-full"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
