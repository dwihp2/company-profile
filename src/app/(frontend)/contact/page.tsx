import { Metadata } from 'next'
import { PageHeader } from '@/components/ui/page-header'
import { ContactForm } from '@/components/sections/contact-form'
import { ContactDetails } from '@/components/sections/contact-details'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team. We\'re here to help with your questions and project needs',
  openGraph: {
    title: 'Contact Us - Nexfolio',
    description: 'Get in touch with our team. We\'re here to help with your questions and project needs',
  },
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Contact Us"
        description="Ready to start your next project? Let's talk about how we can help"
      />
      <div className="grid lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  )
}
