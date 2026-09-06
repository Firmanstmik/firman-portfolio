import { PROCESS_STEPS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Process() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="process" className="section-y bg-ink text-white">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>
            <span className="text-blue-300">{t('process.label')}</span>
          </SectionLabel>
          <h2 className="font-display max-w-3xl text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] font-bold tracking-[-0.035em] text-balance">
            {t('process.title')}
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5 lg:gap-3" stagger={0.07}>
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.num}>
              <HoverLift className="h-full rounded-[16px] border border-white/10 bg-white/[0.03] p-5 sm:p-4 lg:p-5">
                <motion.p
                  className="text-[0.78rem] font-medium text-blue-300/80"
                  whileHover={reduce ? undefined : { color: '#93c5fd' }}
                >
                  {Number(step.num)}
                </motion.p>
                <h3 className="font-display mt-3 text-[1.05rem] font-bold tracking-tight">
                  {t(step.titleKey)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{t(step.descKey)}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
