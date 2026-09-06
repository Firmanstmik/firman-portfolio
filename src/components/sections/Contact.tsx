import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SITE } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Magnetic } from '@/components/ui/Magnetic'

export function Contact() {
  return (
    <section id="contact" className="section-y border-t border-white/8">
      <div className="section-pad container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[90px]"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="eyebrow">Let&apos;s Work Together</p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-balance">
                Have a Project
                <br />
                in Mind?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted">
                I&apos;m always open to new opportunities and exciting projects. Let&apos;s build
                something great together.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Magnetic>
                  <Link href={`mailto:${SITE.email}`} className="btn-primary w-full sm:w-auto">
                    Get In Touch
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </Magnetic>
                <Magnetic strength={10}>
                  <Link
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    WhatsApp
                  </Link>
                </Magnetic>
              </div>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <Mail className="size-4" aria-hidden />
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
