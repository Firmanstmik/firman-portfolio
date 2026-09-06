import { WHY_ITEMS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem } from './ui'

export function Why() {
  const { t } = useLanguage()

  return (
    <section id="why" className="section-pad section-y mx-auto max-w-[1280px]">
      <Reveal>
        <SectionLabel>{t('why.label')}</SectionLabel>
        <SectionTitle>{t('why.title')}</SectionTitle>
      </Reveal>

      <Stagger className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3" stagger={0.06}>
        {WHY_ITEMS.map((item) => (
          <StaggerItem key={item.titleKey}>
            <HoverLift className="surface-card h-full p-5 sm:p-6">
              <div className="mb-3 size-1.5 rounded-full bg-accent" aria-hidden />
              <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                {t(item.titleKey)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{t(item.descKey)}</p>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
