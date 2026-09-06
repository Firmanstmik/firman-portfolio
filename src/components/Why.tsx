import { WHY_ITEMS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem } from './ui'

export function Why() {
  const { t } = useLanguage()

  return (
    <section id="why" className="border-y border-line/80 bg-surface/60 section-y">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('why.label')}</SectionLabel>
          <SectionTitle>{t('why.title')}</SectionTitle>
        </Reveal>

        <Stagger
          className="mt-10 grid auto-rows-fr gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-6"
          stagger={0.06}
        >
          {WHY_ITEMS.map((item, i) => {
            const featured = i === 0
            return (
              <StaggerItem key={item.titleKey} className={featured ? 'lg:col-span-3' : 'lg:col-span-3 xl:col-span-2'}>
                <HoverLift
                  className={`h-full rounded-[18px] border p-5 sm:p-6 ${
                    featured
                      ? 'border-accent/20 bg-accent-soft/80'
                      : 'border-line/80 bg-canvas'
                  }`}
                >
                  <div
                    className={`mb-4 size-2 rounded-full ${featured ? 'bg-accent' : 'bg-ink/70'}`}
                    aria-hidden
                  />
                  <h3
                    className={`font-display font-bold tracking-tight text-ink ${
                      featured ? 'text-xl sm:text-2xl' : 'text-lg'
                    }`}
                  >
                    {t(item.titleKey)}
                  </h3>
                  <p className={`mt-2 leading-relaxed text-slate ${featured ? 'text-[0.98rem]' : 'text-sm'}`}>
                    {t(item.descKey)}
                  </p>
                </HoverLift>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
