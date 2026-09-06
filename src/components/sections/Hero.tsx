'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Globe2 } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { PROFILE, STATS, TERMINAL_LINES } from '@/data/site'
import { Magnetic } from '@/components/ui/Magnetic'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise opacity-60" />

      <div className="section-pad container-max relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[0.78rem]">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 font-medium text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                {PROFILE.availability.toUpperCase()}
              </span>
              <span className="text-muted">Remote · Worldwide</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-[clamp(2.4rem,7vw,4.75rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance">
              {PROFILE.headline[0]}
              <br />
              {PROFILE.headline[1]}
              <br />
              <span className="text-accent">{PROFILE.headline[2]}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted sm:text-[1.08rem]">
              {PROFILE.subcopy}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Magnetic>
                <Link href="/#projects" className="btn-primary w-full sm:w-auto">
                  View My Work
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </Magnetic>
              <Magnetic strength={10}>
                <Link href="/#contact" className="btn-secondary w-full sm:w-auto">
                  Let&apos;s Work Together
                </Link>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/8 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[1.65rem] font-semibold tracking-tight text-text sm:text-[1.85rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.78rem] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-5">
          <Reveal delay={0.12}>
            <div className="relative mx-auto max-w-[420px] lg:ml-auto lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.18),transparent_55%)]"
              />
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-surface">
                <Image
                  src={PROFILE.avatar}
                  alt={`${PROFILE.name}, ${PROFILE.degree}`}
                  width={800}
                  height={1000}
                  priority
                  className="aspect-[4/5] w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute top-4 right-[-0.5rem] w-[min(100%,240px)] rounded-2xl border border-white/10 bg-bg/90 p-4 font-mono text-[0.72rem] shadow-2xl backdrop-blur sm:right-[-1rem] sm:top-8 sm:w-[260px] sm:text-[0.76rem]"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                <p className="mb-3 text-muted">firman@developer:~$</p>
                <p className="mb-1 text-accent">whoami</p>
                {TERMINAL_LINES.map((line) => (
                  <p key={line} className="text-text/90">
                    &gt; {line}
                  </p>
                ))}
                <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-accent" aria-hidden />
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-3 right-3 rounded-2xl border border-white/10 bg-bg/85 p-3.5 backdrop-blur sm:left-4 sm:right-auto sm:max-w-[240px]"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-8 place-items-center rounded-full bg-accent-soft text-accent">
                    <Globe2 className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.82rem] font-semibold">{PROFILE.location}</p>
                    <p className="mt-0.5 text-[0.75rem] text-muted">
                      Working with clients worldwide
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
