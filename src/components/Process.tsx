import { PROCESS_STEPS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Process() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="process" className="relative overflow-hidden section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#eff6ff_0%,#f7f7f5_42%,#f7f7f5_100%)]"
      />
      <div className="section-pad relative mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('process.label')}</SectionLabel>
          <h2 className="font-display max-w-3xl text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] font-bold tracking-[-0.035em] text-ink text-balance">
            {t('process.title')}
          </h2>
        </Reveal>

        <div className="relative mt-10 sm:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute top-8 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent lg:block"
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-3" stagger={0.07}>
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.num}>
                <HoverLift className="relative h-full rounded-[18px] border border-accent/10 bg-surface p-5 shadow-[0_18px_40px_-30px_rgba(29,78,216,0.35)] sm:p-4 lg:p-5">
                  <motion.div
                    className="grid size-9 place-items-center rounded-full bg-accent font-display text-sm font-bold text-white"
                    whileHover={reduce ? undefined : { scale: 1.08 }}
                  >
                    {Number(step.num)}
                  </motion.div>
                  <h3 className="font-display mt-4 text-[1.05rem] font-bold tracking-tight text-ink">
                    {t(step.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{t(step.descKey)}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
