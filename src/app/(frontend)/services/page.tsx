import { Metadata } from 'next'
import { PageHeader } from '@/components/ui/page-header'
import { ServicesGrid } from '@/components/sections/services-grid'
import { ServicesCTA } from '@/components/sections/services-cta'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of professional services designed to meet your business needs',
  openGraph: {
    title: 'Our Services - Nexfolio',
    description: 'Explore our comprehensive range of professional services designed to meet your business needs',
  },
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Our Services"
        description="Professional solutions tailored to drive your business forward"
      />
      <div className="space-y-16">
        <ServicesGrid />
        <ServicesCTA />
      </div>
    </div>
  )
}
