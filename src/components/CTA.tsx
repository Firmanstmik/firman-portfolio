import { ArrowUpRight } from 'lucide-react'
import { PROFILE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { Magnetic, Reveal, motion, useReducedMotion } from './ui'

export function CTA() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="cta" className="relative overflow-hidden bg-ink text-white section-y">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl"
        animate={reduce ? undefined : { opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="section-pad relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-[0.8rem] font-medium text-blue-300">{t('cta.label')}</p>
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.2rem)] leading-[1.1] font-bold tracking-[-0.035em] text-balance">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65 sm:mt-5">{t('cta.sub')}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
            <Magnetic>
              <a href={`mailto:${PROFILE.email}`} className="btn-primary w-full sm:w-auto">
                {t('cta.primary')}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Magnetic>
            <Magnetic strength={12}>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[8px] border border-white/20 bg-white/5 px-5 text-[0.92rem] font-semibold text-white backdrop-blur-sm sm:w-auto"
              >
                {t('cta.secondary')}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
