import { Metadata } from 'next'
import { PageHeader } from '@/components/ui/page-header'
import { ProjectsFilter } from '@/components/sections/projects-filter'
import { ProjectsGrid } from '@/components/sections/projects-grid'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Browse our portfolio of successful projects and see how we deliver exceptional results',
  openGraph: {
    title: 'Our Projects - Nexfolio',
    description: 'Browse our portfolio of successful projects and see how we deliver exceptional results',
  },
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Our Projects"
        description="Showcasing our work and the impact we've made for our clients"
      />
      <div className="space-y-8">
        <ProjectsFilter />
        <ProjectsGrid />
      </div>
    </div>
  )
}
