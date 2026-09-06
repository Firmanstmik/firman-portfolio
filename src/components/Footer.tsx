import Link from 'next/link'
import { Code2, Github, Mail } from 'lucide-react'
import { SITE, PROFILE } from '@/data/site'

const nav = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#services', label: 'Services' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="section-pad container-max py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link href="/#home" className="inline-flex items-center gap-2.5 font-semibold tracking-[0.08em]">
              <span className="grid size-8 place-items-center rounded-lg border border-accent/30 bg-accent-soft text-accent">
                <Code2 className="size-4" aria-hidden />
              </span>
              <span className="text-[0.95rem]">
                <span className="text-white">FIRMAN</span>
                <span className="text-accent">LABS</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Full-stack developer building digital products and business systems.
            </p>
            <p className="mt-3 text-sm text-muted">
              {PROFILE.name}, {PROFILE.degree}
            </p>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-muted uppercase">
              Navigation
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
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Mail className="size-3.5" aria-hidden />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <Github className="size-3.5" aria-hidden />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Firmanlabs</p>
          <p>{PROFILE.location} · Remote worldwide</p>
        </div>
      </div>
    </footer>
  )
}
