import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Nexfolio',
    default: 'Nexfolio - Modern Company Profile'
  },
  description: 'Professional company profile showcasing our services, projects, and team',
  keywords: ['company profile', 'portfolio', 'services', 'professional'],
  authors: [{ name: 'Nexfolio Team' }],
  creator: 'Nexfolio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexfolio.com',
    siteName: 'Nexfolio',
    title: 'Nexfolio - Modern Company Profile',
    description: 'Professional company profile showcasing our services, projects, and team',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexfolio - Modern Company Profile',
    description: 'Professional company profile showcasing our services, projects, and team',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
