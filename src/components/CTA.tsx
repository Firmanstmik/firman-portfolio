import { ArrowUpRight } from 'lucide-react'
import { PROFILE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { Magnetic, Reveal, motion, useReducedMotion } from './ui'

export function CTA() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="cta" className="section-pad relative overflow-hidden border-y border-line/80 section-y">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.12),transparent_62%)]"
        animate={reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-[0.8rem] font-medium text-accent">{t('cta.label')}</p>
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.2rem)] leading-[1.1] font-bold tracking-[-0.035em] text-ink text-balance">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate sm:mt-5">{t('cta.sub')}</p>
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
                className="btn-secondary w-full sm:w-auto"
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
