import { Metadata } from 'next'
import React from 'react'

import './globals.css'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutPreview } from '@/components/sections/about-preview'
import { ServicesPreview } from '@/components/sections/services-preview'
import { ProjectsPreview } from '@/components/sections/projects-preview'
import { ContactCTA } from '@/components/sections/contact-cta'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Nexfolio - Your trusted partner for innovative solutions and professional services',
  openGraph: {
    title: 'Nexfolio - Modern Company Profile',
    description: 'Welcome to Nexfolio - Your trusted partner for innovative solutions and professional services',
  },
}

export default async function HomePage() {

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactCTA />

    </>
  )
}
