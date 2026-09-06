import { TESTIMONIALS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Testimonials() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="testimonials" className="border-y border-line/80 bg-canvas-deep/40 section-y">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('testi.label')}</SectionLabel>
          <SectionTitle>{t('testi.title')}</SectionTitle>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3" stagger={0.08}>
          {TESTIMONIALS.map((item) => (
            <StaggerItem key={item.name}>
              <HoverLift className="surface-card flex h-full flex-col p-6 sm:p-7">
                <blockquote className="flex h-full flex-col">
                <motion.p
                  className="flex-1 text-[0.98rem] leading-relaxed text-ink-soft"
                  initial={reduce ? false : { opacity: 0.85 }}
                  whileInView={{ opacity: 1 }}
                >
                  “{t(item.quoteKey)}”
                </motion.p>
                <footer className="mt-7 flex items-center gap-3 border-t border-line/80 pt-5">
                  <motion.div
                    className="grid size-11 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white"
                    whileHover={reduce ? undefined : { scale: 1.08, rotate: -4 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 16 }}
                  >
                    {item.initial}
                  </motion.div>
                  <div>
                    <cite className="not-italic text-sm font-semibold text-ink">{item.name}</cite>
                    <p className="mt-0.5 text-xs leading-snug text-muted">{t(item.roleKey)}</p>
                  </div>
                </footer>
                </blockquote>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
