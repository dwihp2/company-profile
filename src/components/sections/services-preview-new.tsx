import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Code, Smartphone, Globe, BarChart, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

// Icon mapping for different categories
const categoryIcons: Record<string, LucideIcon> = {
  development: Code,
  mobile: Smartphone,
  strategy: Globe,
  marketing: BarChart,
  default: Globe
}

interface Service {
  id: string
  title: string
  description: string | object // Rich text content
  shortDescription?: string
  icon?: Media
  category: string
  features?: Array<{ feature: string }>
  order?: number
  isActive: boolean
}

interface ServicesPreviewProps {
  services: Service[]
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  // Get the first 4 services (or fewer if there are less than 4)
  const previewServices = services?.slice(0, 4) || [];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>

        {previewServices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Services coming soon</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {previewServices.map((service) => {
              const IconComponent = categoryIcons[service.category] || categoryIcons.default;

              return (
                <Card key={service.id} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-3 rounded-lg w-fit mb-4">
                      {service.icon && typeof service.icon === 'object' && 'url' in service.icon ? (
                        <Image
                          src={service.icon.url || ''}
                          alt={service.icon.alt || service.title}
                          width={32}
                          height={32}
                          className="h-8 w-8"
                        />
                      ) : (
                        <IconComponent className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {service.shortDescription ||
                        (typeof service.description === 'string'
                          ? service.description.substring(0, 120) + (service.description.length > 120 ? '...' : '')
                          : 'Service description available in CMS'
                        )
                      }
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
