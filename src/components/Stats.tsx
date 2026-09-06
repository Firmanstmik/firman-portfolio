import { STATS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { CountUp, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Stats() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(29,78,216,0.35),transparent_50%)]"
      />
      <Stagger
        className="section-pad relative mx-auto grid max-w-[1280px] grid-cols-2 gap-x-4 gap-y-8 py-11 sm:gap-8 sm:py-14 md:grid-cols-4"
        stagger={0.08}
      >
        {STATS.map((stat) => (
          <StaggerItem key={stat.key}>
            <motion.div
              className="md:border-l md:border-white/15 md:pl-5 md:first:border-l-0 md:first:pl-0"
              whileHover={reduce ? undefined : { x: 4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <p className="font-display text-[clamp(1.85rem,5vw,2.55rem)] font-bold tracking-[-0.02em] tabular-nums">
                {/^\d/.test(stat.value) ? <CountUp value={stat.value} /> : stat.value}
              </p>
              <p className="mt-1.5 text-[0.78rem] leading-snug text-white/55 sm:text-[0.82rem]">{t(stat.key)}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
