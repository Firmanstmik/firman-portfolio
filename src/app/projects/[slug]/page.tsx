import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PROJECTS, getProjectBySlug, SITE } from '@/data/site'
import { ProjectCaseStudy } from './ProjectCaseStudy'

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

  return <ProjectCaseStudy project={project} />
}
