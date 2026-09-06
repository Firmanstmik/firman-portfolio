import { STATS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { CountUp, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Stats() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section className="border-y border-line/80 bg-surface/70">
      <Stagger
        className="section-pad mx-auto grid max-w-[1280px] grid-cols-2 gap-x-4 gap-y-8 py-10 sm:gap-8 sm:py-12 md:grid-cols-4"
        stagger={0.08}
      >
        {STATS.map((stat) => (
          <StaggerItem key={stat.key}>
            <motion.div
              className="sm:border-l sm:border-line sm:pl-5 md:first:border-l-0 md:first:pl-0"
              whileHover={reduce ? undefined : { x: 4 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <p className="font-display text-[clamp(1.85rem,5vw,2.55rem)] font-bold tracking-[-0.02em] text-ink tabular-nums">
                {/^\d/.test(stat.value) ? <CountUp value={stat.value} /> : stat.value}
              </p>
              <p className="mt-1.5 text-[0.78rem] leading-snug text-muted sm:text-[0.82rem]">{t(stat.key)}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
