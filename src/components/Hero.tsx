import { ArrowUpRight } from 'lucide-react'
import { PROFILE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { Magnetic, ParallaxImage, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden paper">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-pad relative mx-auto grid min-h-[100svh] max-w-[1280px] items-center gap-8 pt-24 pb-14 sm:gap-10 sm:pt-28 sm:pb-16 md:grid-cols-12 md:gap-10 md:pb-20 lg:gap-14">
        <Stagger className="order-2 md:order-1 md:col-span-7 lg:col-span-6" delay={0.05}>
          <StaggerItem>
            <p className="mb-4 text-[0.82rem] font-medium text-accent">{t('hero.available')}</p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-display text-[clamp(2.45rem,8vw,5.2rem)] leading-[0.94] font-bold tracking-[-0.05em] text-ink">
              {PROFILE.name}
              <motion.span
                className="ml-1.5 align-super text-[0.42em] font-semibold tracking-[-0.02em] text-accent sm:ml-2"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                {PROFILE.degree}
              </motion.span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-3 text-[0.92rem] font-medium tracking-[0.01em] text-muted sm:text-[0.98rem]">
              {t('hero.role')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-1.5 max-w-md text-[0.82rem] leading-snug text-slate sm:text-[0.88rem]">
              {t('hero.education')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { href: 'https://ukonnect.ai/en/about', label: t('hero.badge.uk') },
                { href: 'https://lirepglobal.com/', label: t('hero.badge.lirep') },
              ].map((badge) => (
                <motion.a
                  key={badge.href}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-[0.78rem] font-medium text-ink-soft"
                  whileHover={reduce ? undefined : { y: -2, borderColor: 'rgba(10,10,11,0.28)' }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  {badge.label}
                </motion.a>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="mt-6 max-w-xl text-[clamp(1.05rem,2.4vw,1.4rem)] leading-snug font-medium tracking-[-0.02em] text-ink-soft text-balance sm:mt-7">
              {t('hero.title')}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-3.5 max-w-lg text-[0.98rem] leading-relaxed text-slate sm:text-[1.02rem]">
              {t('hero.sub')}
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Magnetic>
                <a href="#contact" className="btn-primary w-full sm:w-auto">
                  {t('hero.primary')}
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a href="#projects" className="btn-secondary w-full sm:w-auto">
                  {t('hero.secondary')}
                </a>
              </Magnetic>
            </div>
          </StaggerItem>
        </Stagger>

        <motion.div
          className="order-1 md:order-2 md:col-span-5 lg:col-span-6"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[18px] shadow-[0_28px_70px_-36px_rgba(10,10,11,0.5)] sm:rounded-[22px] sm:max-w-[420px] md:aspect-[5/6] md:max-w-none lg:ml-auto lg:max-w-[520px]"
            whileHover={reduce ? undefined : { scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <ParallaxImage
              src={PROFILE.avatar}
              alt={`${PROFILE.name}, ${PROFILE.degree}, ${PROFILE.major}, ${PROFILE.campus}`}
              className="h-full w-full"
              imgClassName="h-full w-full object-cover object-[center_18%] will-change-transform"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(165deg, rgba(29,78,216,0.1), transparent 42%), linear-gradient(to top, rgba(247,247,245,0.45), transparent 28%)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
