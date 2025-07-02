import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Media } from '@/payload-types'
import Image from 'next/image'
import {
  Code,
  Smartphone,
  Globe,
  BarChart,
  Shield,
  Zap,
  Users,
  Settings,
  Palette,
  type LucideIcon
} from 'lucide-react'

// Icon mapping for different categories
const categoryIcons: Record<string, LucideIcon> = {
  development: Code,
  mobile: Smartphone,
  strategy: Globe,
  marketing: BarChart,
  security: Shield,
  cloud: Zap,
  consulting: Users,
  design: Palette,
  default: Settings
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

interface ServicesGridProps {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No services available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const IconComponent = categoryIcons[service.category] || categoryIcons.default

        return (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  {service.icon && typeof service.icon === 'object' && 'url' in service.icon ? (
                    <Image
                      src={service.icon.url || ''}
                      alt={service.icon.alt || service.title}
                      width={24}
                      height={24}
                      className="h-6 w-6"
                    />
                  ) : (
                    <IconComponent className="h-6 w-6 text-primary" />
                  )}
                </div>
                <Badge variant="secondary" className="capitalize">
                  {service.category.replace('-', ' ')}
                </Badge>
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">
                {service.shortDescription ||
                  (typeof service.description === 'string'
                    ? service.description
                    : 'Service description available in CMS'
                  )
                }
              </CardDescription>

              {service.features && service.features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((featureItem, featureIndex) => (
                      <div key={`feature-${featureIndex}-${featureItem.feature}`} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{featureItem.feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
