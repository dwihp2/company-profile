import { Metadata } from 'next'
import React from 'react'

import './globals.css'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutPreview } from '@/components/sections/about-preview'
import { ServicesPreview } from '@/components/sections/services-preview-new'
import { ProjectsPreview } from '@/components/sections/projects-preview-new'
import { ContactCTA } from '@/components/sections/contact-cta'
import {
  getServices,
  getFeaturedProjects
} from '@/lib/payload'

// Add revalidation timing
export const revalidate = 60

// No need for ServiceWithStringId interface anymore as we're using the adapter

// Remove ProjectWithStringId interface since we're using the adapter now

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Nexfolio - Your trusted partner for innovative solutions and professional services',
  openGraph: {
    title: 'Nexfolio - Modern Company Profile',
    description: 'Welcome to Nexfolio - Your trusted partner for innovative solutions and professional services',
  },
}

export default async function HomePage() {
  // Fetch services and featured projects for the homepage
  const services = await getServices();
  const featuredProjects = await getFeaturedProjects();

  // Services and projects are already adapted by the get functions

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview services={services} />
      <ProjectsPreview projects={featuredProjects} />
      <ContactCTA />
    </>
  )
}
