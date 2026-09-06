'use client'

import { EXPERIENCE } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="section-y">
      <div className="section-pad container-max grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionHeader
              eyebrow={t.about.eyebrow}
              title={t.about.title}
            />
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {t.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.8rem] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={0.08}>
            <p className="eyebrow mb-5">{t.about.where}</p>
            <div className="space-y-5">
              {EXPERIENCE.map((job) => {
                const copy = t.experience[job.company]
                const role = copy?.role ?? job.role
                const type = copy?.type ?? job.type
                const desc = copy?.desc ?? job.desc
                const period =
                  job.period === 'Present' ? t.about.present : job.period
                return (
                  <article key={job.company} className="card-surface p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-12 w-28 items-center justify-center overflow-hidden rounded-xl bg-black px-2">
                          <Image
                            src={job.logo}
                            alt={job.company}
                            width={112}
                            height={48}
                            className="max-h-8 w-auto object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold tracking-tight">{job.company}</h3>
                          <p className="text-sm text-accent">{role}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] text-muted">
                        {period}
                      </span>
                    </div>
                    <p className="mt-2.5 text-xs text-muted">{type}</p>
                    <p className="mt-3.5 text-sm leading-relaxed text-muted">{desc}</p>
                    <Link
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                    >
                      {t.about.visit}
                      <Ix icon={Icons.export} size={14} />
                    </Link>
                  </article>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
