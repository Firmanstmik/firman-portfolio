'use client'

import Link from 'next/link'
import { getFeaturedProjects } from '@/data/site'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export function Projects() {
  const { t } = useI18n()
  const featured = getFeaturedProjects()

  return (
    <section id="projects" className="section-y relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />
      <div className="section-pad container-max">
        <Reveal>
          <SectionHeader
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            lead={t.projects.lead}
            action={
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform hover:translate-x-0.5"
              >
                {t.projects.viewAll}
                <Ix icon={Icons.export} size={14} />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:gap-7">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
