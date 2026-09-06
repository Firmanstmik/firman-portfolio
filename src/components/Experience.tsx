import { ArrowUpRight } from 'lucide-react'
import { EXPERIENCE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Experience() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="experience" className="relative overflow-hidden section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#f7f7f5_40%,#eef2ff_100%)]"
      />
      <div className="section-pad relative mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('exp.label')}</SectionLabel>
          <SectionTitle>{t('exp.title')}</SectionTitle>
        </Reveal>

        <Stagger className="relative mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-6" stagger={0.1}>
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 bottom-6 left-[1.35rem] hidden w-px bg-gradient-to-b from-accent/40 via-line to-transparent lg:left-1/2 lg:hidden"
          />
          {EXPERIENCE.map((job) => (
            <StaggerItem key={job.id}>
              <HoverLift className="group surface-card flex h-full flex-col p-6 sm:p-7 md:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <motion.div
                      className="flex h-11 w-[7.25rem] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-ink px-2.5 sm:h-12 sm:w-[8rem]"
                      whileHover={reduce ? undefined : { scale: 1.04 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={job.logo}
                        alt={job.logoAlt}
                        width={128}
                        height={48}
                        className="max-h-7 w-auto object-contain sm:max-h-8"
                        loading="lazy"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                        {job.company}
                      </h3>
                      <p className="mt-0.5 text-[0.82rem] font-medium text-accent">{t(job.roleKey)}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-canvas-deep px-2.5 py-1 text-[0.7rem] font-medium text-muted">
                    {t(job.periodKey)}
                  </span>
                </div>

                <p className="mt-2 text-[0.8rem] text-muted">{t(job.typeKey)}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate">{t(job.descKey)}</p>

                <ul className="mt-5 space-y-2.5 border-t border-line/80 pt-5">
                  {job.highlights.map((key) => (
                    <li key={key} className="flex gap-2.5 text-sm text-ink-soft">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {t(key)}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-[0.86rem] font-semibold text-ink"
                  whileHover={reduce ? undefined : { x: 4 }}
                >
                  <span className="underline-offset-4 group-hover:underline">{t('exp.visit')}</span>
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </motion.a>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
