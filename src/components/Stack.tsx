import { SKILL_KEYS, TECH } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal, SectionLabel, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

function TechGroup({
  label,
  items,
}: {
  label: string
  items: readonly { name: string; icon: string }[]
}) {
  const reduce = useReducedMotion()

  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <p className="mb-4 text-[0.78rem] font-medium tracking-[0.06em] text-blue-200/80 uppercase">{label}</p>
      <Stagger className="flex flex-wrap gap-2.5" stagger={0.04}>
        {items.map((tech) => (
          <StaggerItem key={tech.name}>
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-[12px] border border-white/10 bg-white/[0.05] px-3.5 py-2.5"
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.04,
                      borderColor: 'rgba(147,197,253,0.45)',
                      backgroundColor: 'rgba(255,255,255,0.09)',
                    }
              }
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              <img src={tech.icon} alt="" width={20} height={20} className="size-5 brightness-110" loading="lazy" />
              <span className="text-sm font-medium text-white">{tech.name}</span>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  )
}

export function Stack() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="stack" className="relative overflow-hidden bg-ink text-white section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(29,78,216,0.28),transparent_55%)]"
      />
      <div className="section-pad relative mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>
            <span className="text-blue-300">{t('stack.label')}</span>
          </SectionLabel>
          <h2 className="font-display max-w-3xl text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.12] font-bold tracking-[-0.035em] text-balance">
            {t('stack.title')}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-3">
          <Reveal>
            <TechGroup label={t('stack.frontend')} items={TECH.frontend} />
          </Reveal>
          <Reveal delay={0.04}>
            <TechGroup label={t('stack.backend')} items={TECH.backend} />
          </Reveal>
          <Reveal delay={0.08}>
            <TechGroup label={t('stack.database')} items={TECH.database} />
          </Reveal>
        </div>

        <Stagger className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-2.5" delay={0.1} stagger={0.03}>
          {SKILL_KEYS.map((key) => (
            <StaggerItem key={key}>
              <motion.span
                className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/10 px-3.5 py-2 text-[0.76rem] font-medium text-blue-200"
                whileHover={reduce ? undefined : { scale: 1.06, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {t(key)}
              </motion.span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
