'use client'

import Link from 'next/link'
import { PROJECTS } from '@/data/site'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export function ProjectsIndex() {
  const { t } = useI18n()

  return (
    <section className="section-y pt-28 sm:pt-32">
      <div className="section-pad container-max">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <Ix icon={Icons.arrowLeft} size={16} />
          {t.projects.backHome}
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="eyebrow">{t.projects.allEyebrow}</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight">
            {t.projects.allTitle}
          </h1>
          <p className="mt-4 text-muted">{t.projects.allLead}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
