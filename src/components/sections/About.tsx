import { EXPERIENCE, PROFILE } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="section-pad container-max grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight">
              More Than A Developer.
            </h2>
            <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-muted">
              <p>
                I&apos;m {PROFILE.name}, {PROFILE.degree}, a full-stack developer focused on building
                digital products, business platforms, and systems that solve real problems.
              </p>
              <p>
                Graduate of {PROFILE.major} at {PROFILE.campusFull}. I work across frontend, backend,
                databases, APIs, cloud deployment, and system architecture.
              </p>
              <p>
                Currently shipping remotely with Ukonnect and LIREP Global across Indonesia and Europe.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Based in Indonesia', 'Remote', 'Available Worldwide'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.78rem] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.08}>
            <p className="eyebrow mb-4">Where I Ship From</p>
            <div className="space-y-4">
              {EXPERIENCE.map((job) => (
                <article key={job.company} className="card-surface p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-24 items-center justify-center overflow-hidden rounded-xl bg-black px-2">
                        <Image
                          src={job.logo}
                          alt={job.company}
                          width={96}
                          height={40}
                          className="max-h-7 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold tracking-tight">{job.company}</h3>
                        <p className="text-sm text-accent">{job.role}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted">{job.type}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{job.desc}</p>
                  <Link
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                  >
                    Visit company
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
