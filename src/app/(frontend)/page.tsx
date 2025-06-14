import { Metadata } from 'next'
import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
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
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <ContactCTA />
      <div className="home">
        <div className="content">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
            <Image
              alt="Payload Logo"
              height={65}
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
              width={65}
            />
          </picture>
          {!user && <h1>Welcome to your new project.</h1>}
          {user && <h1>Welcome back, {user.email}</h1>}
          <div className="links">
            <a
              className="admin"
              href={payloadConfig.routes.admin}
              rel="noopener noreferrer"
              target="_blank"
            >
              Go to admin panel
            </a>
            <a
              className="docs"
              href="https://payloadcms.com/docs"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="footer">
          <p>Update this page by editing</p>
          <a className="codeLink" href={fileURL}>
            <code>app/(frontend)/page.tsx</code>
          </a>
        </div>
      </div>
    </>
  )
}
