'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { EXPERIENCE, PROFILE } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.35])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[100svh] overflow-x-clip overflow-y-hidden">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y: bgY }}>
        <Image
          src="/img/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-center sm:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.88)_0%,rgba(5,7,13,0.72)_45%,rgba(5,7,13,0.82)_100%)] lg:bg-[linear-gradient(105deg,rgba(5,7,13,0.9)_0%,rgba(5,7,13,0.68)_38%,rgba(5,10,22,0.32)_72%,rgba(5,7,13,0.5)_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(47,128,255,0.22),transparent_55%)] lg:bg-[radial-gradient(ellipse_at_72%_38%,rgba(47,128,255,0.28),transparent_52%)]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-bg via-bg/50 to-transparent"
        />
      </motion.div>

      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-[12%] left-1/2 hidden h-56 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-[90px] sm:block"
          animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : null}

      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="section-pad container-max relative grid min-h-[100svh] items-center gap-10 pt-24 pb-14 sm:gap-12 sm:pt-28 sm:pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-32 lg:pb-20 xl:gap-12"
      >
        <div className="relative z-10 min-w-0 lg:col-span-6">
          <Reveal>
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3 py-1.5 text-[0.72rem] font-semibold tracking-wide text-accent backdrop-blur-sm sm:mb-5 sm:px-3.5 sm:text-[0.78rem]">
              <Sparkles className="size-3.5 shrink-0" aria-hidden />
              <span className="truncate">Available for international projects</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-[0.95rem] font-semibold tracking-wide text-accent sm:text-[1.05rem]">
              Hello, I&apos;m
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-2 text-[clamp(2.35rem,10vw,5.5rem)] leading-[1.02] font-bold tracking-[-0.04em] text-white text-balance">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {PROFILE.name}
              </motion.span>
              <span className="mt-2 block text-[clamp(1.35rem,5.2vw,2.85rem)] font-semibold tracking-[-0.03em] text-white/92 sm:mt-3">
                {PROFILE.role}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/78 sm:mt-6 sm:text-[1.12rem] sm:leading-[1.75]">
              I build exceptional digital products and business systems for companies in Indonesia,
              the Netherlands, and around the world.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link href="/#projects" className="btn-primary sm:w-auto">
                <span>View My Work</span>
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </Link>
              <Link href="/#contact" className="btn-secondary sm:w-auto">
                <Mail className="size-4 shrink-0" aria-hidden />
                <span>Contact Me</span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 border-t border-white/10 pt-7 sm:mt-12 sm:pt-8">
              <p className="text-[0.78rem] font-medium tracking-wide text-white/55 sm:text-[0.8rem]">
                Trusted by companies I&apos;ve shipped with
              </p>
              <div className="mt-3.5 flex flex-wrap items-center gap-3 sm:mt-4 sm:gap-5">
                {EXPERIENCE.map((job, i) => (
                  <motion.a
                    key={job.company}
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 max-w-full items-center rounded-xl border border-white/10 bg-white/[0.05] px-3.5 backdrop-blur-md transition-all duration-300 sm:h-12 sm:px-4 sm:hover:-translate-y-0.5 sm:hover:border-accent/45 sm:hover:bg-white/[0.09]"
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                  >
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={110}
                      height={36}
                      className="max-h-6 w-auto object-contain brightness-0 invert opacity-90 sm:max-h-7"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 min-w-0 lg:col-span-6">
          <Reveal delay={0.12} y={40}>
            <motion.div
              className="relative mx-auto w-full max-w-[340px] sm:max-w-[420px] lg:ml-auto lg:mr-0 lg:max-w-[520px]"
              style={reduce ? undefined : { y: portraitY }}
            >
              <div
                aria-hidden
                className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.3),transparent_62%)] blur-3xl sm:-inset-14"
              />

              {!reduce ? (
                <motion.div
                  aria-hidden
                  className="absolute top-2 right-2 z-20 hidden rounded-2xl border border-white/15 bg-[#05070d]/75 px-3.5 py-2 text-[0.72rem] font-medium text-white/85 shadow-xl backdrop-blur-xl sm:block sm:top-3 sm:right-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Full-stack · Remote
                </motion.div>
              ) : null}

              <motion.div
                className="relative"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    WebkitMaskImage:
                      'linear-gradient(to bottom, #000 0%, #000 70%, transparent 100%)',
                    maskImage:
                      'linear-gradient(to bottom, #000 0%, #000 70%, transparent 100%)',
                  }}
                >
                  <Image
                    src={PROFILE.avatar}
                    alt={`${PROFILE.name}, ${PROFILE.degree}`}
                    width={1000}
                    height={1250}
                    priority
                    className="aspect-[4/5] w-full object-cover object-[center_12%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(47,128,255,0.22),transparent_42%)]" />
                </div>

                <motion.div
                  className="absolute inset-x-3 bottom-4 z-20 rounded-2xl border border-white/15 bg-[#05070d]/80 px-3.5 py-3 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:inset-x-auto sm:right-5 sm:bottom-6 sm:max-w-[250px] sm:px-4 sm:py-3.5"
                  initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.55 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot size-2 rounded-full bg-accent" />
                    <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-accent uppercase sm:text-[0.72rem]">
                      Available Now
                    </p>
                  </div>
                  <p className="mt-1 text-[0.82rem] font-medium text-white sm:mt-1.5 sm:text-sm">
                    International remote projects
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  )
}
