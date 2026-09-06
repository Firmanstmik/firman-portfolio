import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={Math.min(index, 3) * 0.06}>
      <article className="group card-surface overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(34,197,94,0.12)]">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-surface-2">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2 text-[0.72rem] text-muted">
            <span className="font-mono text-accent">{project.code}</span>
            <span>/</span>
            <span>{project.category}</span>
            <span
              className={`ml-auto rounded-full px-2 py-0.5 ${
                project.status === 'live'
                  ? 'bg-accent-soft text-accent'
                  : 'bg-white/5 text-muted'
              }`}
            >
              {project.status === 'live' ? 'Live' : 'Building'}
            </span>
          </div>

          <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
            <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[0.7rem] text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5"
          >
            View Case Study
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </article>
    </Reveal>
  )
}
