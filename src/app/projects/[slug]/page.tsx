import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { PROJECTS, getProjectBySlug, SITE } from '@/data/site'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project not found' }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${SITE.name}`,
      description: project.summary,
      images: [project.image],
    },
  }
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <article className="pt-24 pb-20 sm:pt-28">
      <div className="section-pad container-max">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to projects
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="eyebrow">
            {project.code} · {project.category}
          </p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open Live Site
              <ExternalLink className="size-4" aria-hidden />
            </a>
            <Link href="/#contact" className="btn-secondary">
              Discuss a similar build
              <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[22px] border border-white/10 bg-surface">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Problem</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Solution</h2>
              <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Key Features</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-sm text-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Challenges</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {project.challenges.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Results</h2>
              <ul className="mt-3 space-y-2 text-muted">
                {project.results.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-5 lg:col-span-4">
            <div className="card-surface p-5">
              <h2 className="text-sm font-semibold tracking-[0.08em] text-accent uppercase">
                My Role
              </h2>
              <ul className="mt-4 space-y-2">
                {project.role.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface p-5">
              <h2 className="text-sm font-semibold tracking-[0.08em] text-accent uppercase">
                Technology
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 px-2.5 py-1 text-[0.72rem] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.company ? (
              <div className="card-surface p-5">
                <h2 className="text-sm font-semibold tracking-[0.08em] text-accent uppercase">
                  Company
                </h2>
                <p className="mt-3 text-sm text-muted">{project.company}</p>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  )
}
