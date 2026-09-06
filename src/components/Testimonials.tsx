import { TESTIMONIALS } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import { HoverLift, Reveal, SectionLabel, SectionTitle, Stagger, StaggerItem, motion, useReducedMotion } from './ui'

export function Testimonials() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="testimonials" className="relative overflow-hidden section-y">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.08),transparent_45%),linear-gradient(180deg,#f3f2ee_0%,#f7f7f5_55%,#efeee9_100%)]"
      />
      <div className="section-pad relative mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('testi.label')}</SectionLabel>
          <SectionTitle>{t('testi.title')}</SectionTitle>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-3" stagger={0.08}>
          {TESTIMONIALS.map((item, i) => (
            <StaggerItem key={item.name} className={i === 0 ? 'lg:col-span-1' : undefined}>
              <HoverLift
                className={`relative flex h-full flex-col overflow-hidden rounded-[20px] border border-line/80 bg-surface p-6 sm:p-7 ${
                  i === 0 ? 'lg:bg-ink lg:text-white lg:border-ink' : ''
                }`}
              >
                <blockquote className="flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold ${
                        i === 0 ? 'bg-white/10 text-blue-200' : 'bg-canvas-deep text-muted'
                      }`}
                    >
                      {item.project}
                    </span>
                    <span
                      aria-hidden
                      className={`font-display text-4xl leading-none ${i === 0 ? 'text-white/20' : 'text-accent/25'}`}
                    >
                      ”
                    </span>
                  </div>

                  <motion.p
                    className={`flex-1 text-[1.02rem] leading-relaxed ${i === 0 ? 'text-white/85' : 'text-ink-soft'}`}
                    initial={reduce ? false : { opacity: 0.85 }}
                    whileInView={{ opacity: 1 }}
                  >
                    {t(item.quoteKey)}
                  </motion.p>

                  <footer
                    className={`mt-7 flex items-center gap-3 border-t pt-5 ${
                      i === 0 ? 'border-white/15' : 'border-line/80'
                    }`}
                  >
                    <motion.div
                      className="grid size-11 place-items-center rounded-full font-display text-sm font-bold text-white"
                      style={{ background: item.accent }}
                      whileHover={reduce ? undefined : { scale: 1.08, rotate: -4 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 16 }}
                    >
                      {item.initial}
                    </motion.div>
                    <div>
                      <cite className={`not-italic text-sm font-semibold ${i === 0 ? 'text-white' : 'text-ink'}`}>
                        {item.name}
                      </cite>
                      <p className={`mt-0.5 text-xs leading-snug ${i === 0 ? 'text-white/55' : 'text-muted'}`}>
                        {t(item.roleKey)}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
