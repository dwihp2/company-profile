import { Metadata } from 'next'
import { PageHeader } from '@/components/ui/page-header'
import { ProjectsFilter } from '@/components/sections/projects-filter'
import { ProjectsGrid } from '@/components/sections/projects-grid-new'
import { getAllProjects, getProjectCategories } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Browse our portfolio of successful projects and see how we deliver exceptional results',
  openGraph: {
    title: 'Our Projects - Nexfolio',
    description: 'Browse our portfolio of successful projects and see how we deliver exceptional results',
  },
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const categories = await getProjectCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Our Projects"
        description="Showcasing our work and the impact we've made for our clients"
      />
      <div className="space-y-8">
        <ProjectsFilter categories={categories} />
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  )
}
