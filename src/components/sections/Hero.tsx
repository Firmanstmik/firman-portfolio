'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { EXPERIENCE, PROFILE } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/img/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,7,13,0.88)_0%,rgba(5,7,13,0.62)_40%,rgba(5,10,22,0.35)_70%,rgba(5,7,13,0.55)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(47,128,255,0.22),transparent_55%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
        />
      </div>

      <div className="section-pad container-max relative grid min-h-[100svh] items-center gap-12 pt-28 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-32 lg:pb-20">
        <div className="lg:col-span-6 xl:col-span-7">
          <Reveal>
            <p className="text-[0.95rem] font-semibold tracking-wide text-accent sm:text-[1.05rem]">
              Hello, I&apos;m
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-3 text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.98] font-bold tracking-[-0.04em] text-white text-balance">
              {PROFILE.name}
              <span className="mt-2 block text-[clamp(1.55rem,3.8vw,2.75rem)] font-semibold tracking-[-0.03em] text-white/95">
                {PROFILE.role}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/75 sm:text-[1.12rem] sm:leading-[1.75]">
              I build exceptional digital products and business systems for companies in Indonesia,
              the Netherlands, and around the world.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <Link href="/#projects" className="btn-primary w-full sm:w-auto">
                <span>View My Work</span>
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link href="/#contact" className="btn-secondary w-full sm:w-auto">
                <Mail className="size-4" aria-hidden />
                <span>Contact Me</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-[0.8rem] font-medium tracking-wide text-white/55">
                Trusted by companies I&apos;ve shipped with
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6">
                {EXPERIENCE.map((job, i) => (
                  <motion.a
                    key={job.company}
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/[0.07]"
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={110}
                      height={36}
                      className="max-h-7 w-auto object-contain brightness-0 invert opacity-90"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-5">
          <Reveal delay={0.14} y={36}>
            <div className="relative mx-auto max-w-[440px] lg:ml-auto lg:max-w-[500px]">
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.28),transparent_65%)] blur-2xl"
              />

              <div className="relative">
                <div className="overflow-hidden rounded-[28px] border border-white/12 bg-surface/40 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-sm">
                  <Image
                    src={PROFILE.avatar}
                    alt={`${PROFILE.name}, ${PROFILE.degree}`}
                    width={900}
                    height={1125}
                    priority
                    className="aspect-[4/5] w-full object-cover object-[center_16%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent opacity-70" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(47,128,255,0.2),transparent_45%)]" />
                </div>

                <motion.div
                  className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/12 bg-[#05070d]/80 px-4 py-3.5 backdrop-blur-xl sm:left-auto sm:right-5 sm:max-w-[240px]"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                >
                  <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-accent uppercase">
                    Available Now
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">International remote projects</p>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
