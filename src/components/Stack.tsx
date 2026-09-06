import { SKILL_KEYS, TECH } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

function TechGroup({
  label,
  items,
}: {
  label: string
  items: readonly { name: string; icon: string }[]
}) {
  const reduce = useReducedMotion()

  return (
    <div>
      <p className="mb-3 text-[0.8rem] font-medium text-muted">{label}</p>
      <Stagger className="flex flex-wrap gap-2.5" stagger={0.04}>
        {items.map((tech) => (
          <StaggerItem key={tech.name}>
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-[12px] border border-line bg-surface px-3.5 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset]"
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.04,
                      borderColor: 'rgba(29,78,216,0.35)',
                      boxShadow: '0 12px 28px -18px rgba(29,78,216,0.45)',
                    }
              }
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
            >
              <img src={tech.icon} alt="" width={20} height={20} className="size-5" loading="lazy" />
              <span className="text-sm font-medium text-ink">{tech.name}</span>
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
    <section id="stack" className="border-y border-line/80 bg-canvas-deep/45 section-y">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('stack.label')}</SectionLabel>
          <SectionTitle>{t('stack.title')}</SectionTitle>
        </Reveal>

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
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
                className="inline-flex rounded-full border border-accent/15 bg-accent-soft px-3.5 py-2 text-[0.76rem] font-medium text-accent"
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
