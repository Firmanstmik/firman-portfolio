import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/site'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { Reveal } from '@/components/ui/Reveal'

export function Projects() {
  const featured = getFeaturedProjects()

  return (
    <section id="projects" className="section-y">
      <div className="section-pad container-max">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                A selection of real systems I&apos;ve built for businesses, organizations, and startups.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              View All Projects
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
