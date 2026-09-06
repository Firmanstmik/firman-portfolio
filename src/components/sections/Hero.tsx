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
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 lg:min-h-[100svh] lg:pt-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[12%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.12] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[20%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/[0.08] blur-[110px]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 noise opacity-50" />

      <div className="section-pad container-max relative grid items-center gap-14 pb-20 lg:grid-cols-12 lg:gap-12 lg:pb-28 xl:gap-16">
        <div className="lg:col-span-6 xl:col-span-7">
          <Reveal>
            <div className="mb-7 flex flex-wrap items-center gap-3 text-[0.8rem]">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 font-medium text-accent shadow-[0_0_24px_-8px_rgba(34,197,94,0.8)]">
                <span className="pulse-dot size-1.5 rounded-full bg-accent" />
                {PROFILE.availability.toUpperCase()}
              </span>
              <span className="text-muted">Remote · Worldwide</span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="max-w-[11ch] text-[clamp(2.75rem,7.2vw,5.4rem)] leading-[0.94] font-semibold tracking-[-0.05em] text-balance sm:max-w-none">
              {PROFILE.headline[0]}
              <br />
              {PROFILE.headline[1]}
              <br />
              <span className="bg-gradient-to-r from-accent via-[#4ade80] to-accent bg-clip-text text-transparent">
                {PROFILE.headline[2]}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted sm:text-[1.15rem] sm:leading-[1.7]">
              {PROFILE.subcopy}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
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

          <Reveal delay={0.24}>
            <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-9 sm:grid-cols-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.05, duration: 0.45 }}
                >
                  <p className="text-[1.85rem] font-semibold tracking-tight text-text sm:text-[2.05rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[0.78rem] leading-snug text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-5">
          <Reveal delay={0.14} y={36}>
            <div className="relative mx-auto max-w-[460px] lg:ml-auto lg:mr-0 lg:max-w-[520px]">
              <div
                aria-hidden
                className="absolute -inset-8 rounded-[36px] bg-[radial-gradient(circle_at_35%_20%,rgba(34,197,94,0.22),transparent_58%)]"
              />
              <div
                aria-hidden
                className="absolute -right-6 -bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              />

              <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-surface shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
                <Image
                  src={PROFILE.avatar}
                  alt={`${PROFILE.name}, ${PROFILE.degree}`}
                  width={900}
                  height={1125}
                  priority
                  className="aspect-[4/5] w-full object-cover object-[center_16%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(34,197,94,0.18),transparent_42%)]" />
                <div className="absolute inset-0 mix-blend-multiply bg-[#0a1a12]/35" />
              </div>

              <motion.div
                className="float-y absolute top-5 right-[-0.75rem] z-10 w-[min(100%,250px)] rounded-2xl border border-white/12 bg-bg/92 p-4 font-mono text-[0.72rem] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:right-[-1.25rem] sm:top-10 sm:w-[270px] sm:text-[0.78rem]"
                initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#ff5f57]" />
                  <span className="size-2 rounded-full bg-[#febc2e]" />
                  <span className="size-2 rounded-full bg-[#28c840]" />
                  <span className="ml-2 text-[0.65rem] text-muted">whoami</span>
                </div>
                <p className="mb-2 text-muted">firman@developer:~$</p>
                {TERMINAL_LINES.map((line, i) => (
                  <motion.p
                    key={line}
                    className="text-text/90"
                    initial={reduce ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.08 }}
                  >
                    <span className="text-accent">&gt;</span> {line}
                  </motion.p>
                ))}
                <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-accent" aria-hidden />
              </motion.div>

              <motion.div
                className="absolute bottom-5 left-3 right-3 z-10 rounded-2xl border border-white/12 bg-bg/90 p-4 shadow-2xl backdrop-blur-xl sm:left-5 sm:right-auto sm:max-w-[260px]"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.55 }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-9 place-items-center rounded-full bg-accent-soft text-accent">
                    <Globe2 className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[0.86rem] font-semibold">{PROFILE.location}</p>
                    <p className="mt-0.5 text-[0.76rem] leading-snug text-muted">
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
