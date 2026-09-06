'use client'

import Link from 'next/link'
import { SITE, PROFILE } from '@/data/site'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export function Footer() {
  const { t } = useI18n()

  const nav = [
    { href: '/#home', label: t.nav.home },
    { href: '/#about', label: t.nav.about },
    { href: '/#projects', label: t.nav.projects },
    { href: '/#services', label: t.nav.services },
    { href: '/#testimonials', label: t.nav.testimonials },
    { href: '/#contact', label: t.nav.contact },
  ] as const

  return (
    <footer className="border-t border-white/8">
      <div className="section-pad container-max py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-2.5 font-semibold tracking-[0.08em]">
              <span className="grid size-8 place-items-center rounded-lg border border-accent/30 bg-accent-soft text-accent">
                <Ix icon={Icons.brand} size={16} />
              </span>
              <span className="text-[0.95rem]">
                <span className="text-white">FIRMAN</span>
                <span className="text-accent">LABS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t.footer.blurb}
            </p>
            <p className="mt-3 text-sm text-muted">
              {PROFILE.name}, {PROFILE.degree}
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted uppercase">
              {t.footer.navigation}
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted uppercase">
              {t.footer.connect}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Ix icon={Icons.mail} size={14} />
                  {t.footer.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Ix icon={Icons.link} size={14} />
                  {t.footer.github}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Ix icon={Icons.whatsapp} size={14} />
                  {t.footer.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Firmanlabs</p>
          <p>{t.footer.based}</p>
        </div>
      </div>
    </footer>
  )
}
