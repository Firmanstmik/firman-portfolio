import { Mail, Phone } from 'lucide-react'
import { AVAIL_ITEMS, PROFILE } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import {
  HoverLift,
  Reveal,
  SectionLabel,
  SectionTitle,
  Stagger,
  StaggerItem,
  motion,
  useReducedMotion,
} from './ui'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 22v-4a4 4 0 0 0-1-2c3 0 6-1 6-5a4 4 0 0 0-1-3 4 4 0 0 0-.1-3S18 4 15 6a13 13 0 0 0-6 0C6 4 4.1 5 4.1 5a4 4 0 0 0-.1 3 4 4 0 0 0-1 3c0 4 3 5 6 5a4 4 0 0 0-1 2v4" />
      <path d="M9 18c-4 1-5-2-5-2" />
    </svg>
  )
}

export function Contact() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  const links = [
    {
      href: `mailto:${PROFILE.email}`,
      icon: Mail,
      title: t('contact.email'),
      sub: PROFILE.email,
      external: false,
    },
    {
      href: PROFILE.whatsapp,
      icon: Phone,
      title: t('contact.phone'),
      sub: t('contact.phoneSub'),
      external: true,
    },
    {
      href: PROFILE.github,
      icon: GitHubIcon,
      title: t('contact.github'),
      sub: PROFILE.githubLabel,
      external: true,
    },
  ]

  return (
    <section id="contact" className="section-pad section-y mx-auto max-w-[1280px]">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        <div>
          <Reveal>
            <SectionLabel>{t('contact.label')}</SectionLabel>
            <SectionTitle>{t('contact.title')}</SectionTitle>
            <p className="mt-4 max-w-md text-slate sm:mt-5">{t('contact.sub')}</p>
          </Reveal>

          <Stagger className="mt-8 space-y-3 sm:mt-10" stagger={0.07}>
            {links.map((link) => (
              <StaggerItem key={link.href}>
                <HoverLift className="surface-card">
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4"
                  >
                    <motion.span
                      className="grid size-11 place-items-center rounded-[12px] bg-canvas-deep text-ink"
                      whileHover={reduce ? undefined : { scale: 1.08, backgroundColor: '#eff6ff' }}
                    >
                      <link.icon className="size-4" aria-hidden />
                    </motion.span>
                    <span className="min-w-0">
                      <strong className="block text-sm font-semibold text-ink">{link.title}</strong>
                      <span className="block truncate text-xs text-muted sm:text-[0.8rem]">{link.sub}</span>
                    </span>
                  </a>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.06}>
          <motion.aside
            className="surface-card p-6 sm:p-7 md:p-8"
            whileHover={reduce ? undefined : { y: -4 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-35" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
              </span>
              <p className="font-display text-xl font-bold tracking-tight text-ink">{t('avail.title')}</p>
            </div>
            <p className="mt-2 text-[0.82rem] font-medium text-accent">{t('avail.status')}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate">{t('avail.desc')}</p>

            <div className="mt-6 rounded-[12px] border border-accent/15 bg-accent-soft/70 p-4">
              <p className="mb-3 text-[0.78rem] font-medium text-muted">{t('avail.listLabel')}</p>
              <ul className="space-y-2.5">
                {AVAIL_ITEMS.map((key) => (
                  <li key={key} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </Reveal>
      </div>
    </section>
  )
}
