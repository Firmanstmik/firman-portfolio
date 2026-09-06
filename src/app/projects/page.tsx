import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PROJECTS } from '@/data/site'
import { ProjectCard } from '@/components/sections/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected systems and digital products built by Firman — SaaS, marketplaces, APIs, and business platforms.',
}

export default function ProjectsIndexPage() {
  return (
    <section className="section-y pt-28 sm:pt-32">
      <div className="section-pad container-max">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to home
        </Link>

        <div className="mt-8 max-w-2xl">
          <p className="eyebrow">All Work</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-muted">
            Real systems shipped for businesses, organizations, and startups — from marketplaces
            and booking platforms to intelligence products and conversion websites.
          </p>
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
