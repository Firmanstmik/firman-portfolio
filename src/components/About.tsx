import { ABOUT_HIGHLIGHTS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem } from './ui'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section-pad section-y mx-auto max-w-[1280px]">
      <Reveal>
        <SectionLabel>{t('about.label')}</SectionLabel>
        <SectionTitle>{t('about.title')}</SectionTitle>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="space-y-4 text-[1.02rem] leading-relaxed text-slate sm:space-y-5 sm:text-[1.05rem]" y={20}>
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
        </Reveal>

        <Stagger className="grid gap-3 sm:gap-4" stagger={0.08} delay={0.08}>
          {ABOUT_HIGHLIGHTS.map((item) => (
            <StaggerItem key={item.titleKey}>
              <HoverLift className="surface-card p-5 sm:p-6">
                <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-ink sm:text-lg">
                  {t(item.titleKey)}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(item.descKey)}</p>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
