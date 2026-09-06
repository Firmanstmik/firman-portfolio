import Link from 'next/link'
import { ArrowUpRight, Github, Mail } from 'lucide-react'
import { SITE } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function Contact() {
  return (
    <section id="contact" className="section-y border-t border-white/8">
      <div className="section-pad container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-surface-2 to-surface px-5 py-12 sm:rounded-[32px] sm:px-12 sm:py-20 lg:px-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[min(36rem,100%)] -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 noise"
            />
            <div className="relative mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center before:hidden">Let&apos;s Work Together</p>
              <h2 className="mt-5 text-[clamp(2rem,8vw,4rem)] font-semibold tracking-tight text-balance">
                Have a Project
                <br />
                in Mind?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[1rem] text-muted sm:text-[1.05rem]">
                I&apos;m always open to new opportunities and exciting projects. Let&apos;s build
                something great together.
              </p>

              <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-3.5">
                <Link href={`mailto:${SITE.email}`} className="btn-primary sm:w-auto">
                  <span>Get In Touch</span>
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary sm:w-auto"
                >
                  <span>WhatsApp</span>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-muted">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="size-4" aria-hidden />
                  {SITE.email}
                </a>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Github className="size-4" aria-hidden />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
