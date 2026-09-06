'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/site'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { t, localizeProject } = useI18n()
  const p = localizeProject(project)

  return (
    <article className="pt-24 pb-20 sm:pt-28">
      <div className="section-pad container-max">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <Ix icon={Icons.arrowLeft} size={16} />
          {t.projects.backProjects}
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="eyebrow">
            {p.code} · {p.category}
          </p>
          <h1 className="mt-4 text-[clamp(2.2rem,5vw,3.75rem)] font-semibold tracking-tight">
            {p.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>{t.projects.openLive}</span>
              <Ix icon={Icons.link} size={16} />
            </a>
            <Link href="/#contact" className="btn-secondary">
              <span>{t.projects.discuss}</span>
              <Ix icon={Icons.export} size={16} />
            </Link>
          </div>
        </div>

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[24px] border border-white/10 bg-surface shadow-[0_40px_80px_-48px_rgba(0,0,0,0.9)]">
          <Image
            src={p.image}
            alt={`${p.title} screenshot`}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-12 lg:col-span-8">
            <section>
              <h2 className="text-xl font-semibold tracking-tight">{t.projects.problem}</h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{p.problem}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">{t.projects.solution}</h2>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-muted">{p.solution}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">{t.projects.features}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3.5 text-sm leading-relaxed text-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">{t.projects.challenges}</h2>
              <ul className="mt-4 space-y-3 text-muted">
                {p.challenges.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">{t.projects.results}</h2>
              <ul className="mt-4 space-y-3 text-muted">
                {p.results.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <div className="card-surface p-6">
              <h2 className="text-sm font-semibold tracking-[0.1em] text-accent uppercase">
                {t.projects.role}
              </h2>
              <ul className="mt-5 space-y-2.5">
                {p.role.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface p-6">
              <h2 className="text-sm font-semibold tracking-[0.1em] text-accent uppercase">
                {t.projects.tech}
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.72rem] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {p.company ? (
              <div className="card-surface p-6">
                <h2 className="text-sm font-semibold tracking-[0.1em] text-accent uppercase">
                  Company
                </h2>
                <p className="mt-4 text-sm text-muted">{p.company}</p>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  )
}
