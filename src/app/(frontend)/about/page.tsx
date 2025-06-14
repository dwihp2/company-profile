import { Metadata } from 'next'
import { PageHeader } from '@/components/ui/page-header'
import { CompanyOverview } from '@/components/sections/company-overview'
import { CompanyValues } from '@/components/sections/company-values'
import { TeamSection } from '@/components/sections/team-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company, mission, values, and the talented team behind our success',
  openGraph: {
    title: 'About Us - Nexfolio',
    description: 'Learn about our company, mission, values, and the talented team behind our success',
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="About Us"
        description="Discover our story, mission, and the passionate team driving innovation"
      />
      <div className="space-y-16">
        <CompanyOverview />
        <CompanyValues />
        <TeamSection />
      </div>
    </div>
  )
}
