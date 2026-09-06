import type { Metadata } from 'next'
import { ProjectsIndex } from './ProjectsIndex'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected systems and digital products built by Firman · SaaS, marketplaces, APIs, and business platforms.',
}

export default function ProjectsIndexPage() {
  return <ProjectsIndex />
}
