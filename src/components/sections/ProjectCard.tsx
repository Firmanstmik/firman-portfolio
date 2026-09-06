'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, localizeProject } = useI18n()
  const p = localizeProject(project)

  return (
    <Reveal delay={Math.min(index, 3) * 0.07}>
      <article className="group card-surface overflow-hidden">
        <Link href={`/projects/${p.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-surface-2">
            <Image
              src={p.image}
              alt={`${p.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-80" />
          </div>
        </Link>

        <div className="p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 text-[0.74rem] text-muted">
            <span className="font-mono text-accent">{p.code}</span>
            <span className="opacity-40">/</span>
            <span>{p.category}</span>
            <span
              className={`ml-auto rounded-full px-2.5 py-0.5 ${
                p.status === 'live'
                  ? 'bg-accent-soft text-accent'
                  : 'bg-white/5 text-muted'
              }`}
            >
              {p.status === 'live' ? t.projects.live : t.projects.building}
            </span>
          </div>

          <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight sm:text-[1.55rem]">
            <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-accent">
              {p.title}
            </Link>
          </h3>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{p.tagline}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[0.72rem] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${p.slug}`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-300 group-hover:translate-x-1"
          >
            {t.projects.viewCase}
            <Ix
              icon={Icons.export}
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}
