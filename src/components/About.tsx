import { ABOUT_HIGHLIGHTS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem } from './ui'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative section-y">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('about.label')}</SectionLabel>
          <SectionTitle>{t('about.title')}</SectionTitle>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal
            className="relative space-y-4 border-l-2 border-accent/30 pl-5 text-[1.02rem] leading-relaxed text-slate sm:space-y-5 sm:pl-7 sm:text-[1.05rem]"
            y={20}
          >
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p className="font-medium text-ink-soft">{t('about.p3')}</p>
          </Reveal>

          <Stagger className="grid gap-3 sm:gap-3.5" stagger={0.08} delay={0.08}>
            {ABOUT_HIGHLIGHTS.map((item, i) => (
              <StaggerItem key={item.titleKey}>
                <HoverLift className="group relative overflow-hidden rounded-[16px] border border-line bg-surface p-5 sm:p-6">
                  <span className="font-display absolute top-3 right-4 text-[2rem] font-bold tracking-tight text-canvas-deep transition-colors group-hover:text-accent-soft">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display relative text-[1.05rem] font-bold tracking-tight text-ink sm:text-lg">
                    {t(item.titleKey)}
                  </h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{t(item.descKey)}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
