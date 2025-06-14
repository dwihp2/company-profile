import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Code,
  Smartphone,
  Globe,
  BarChart,
  Shield,
  Zap,
  Users,
  Settings
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like React, Next.js, and Vue.js. We focus on performance, scalability, and user experience.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Progressive Web Apps'],
    category: 'Development'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and native technologies.',
    features: ['Cross-platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
    category: 'Mobile'
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital transformation consulting to help businesses navigate the modern digital landscape.',
    features: ['Digital Transformation', 'Process Optimization', 'Technology Roadmap', 'Change Management'],
    category: 'Strategy'
  },
  {
    icon: BarChart,
    title: 'Analytics & SEO',
    description: 'Data-driven insights and search engine optimization to boost your online presence and conversion rates.',
    features: ['Google Analytics', 'Search Optimization', 'Conversion Tracking', 'Performance Reports'],
    category: 'Marketing'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Risk Assessment'],
    category: 'Security'
  },
  {
    icon: Zap,
    title: 'Cloud Solutions',
    description: 'Cloud migration, infrastructure setup, and optimization services for AWS, Azure, and Google Cloud platforms.',
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto Scaling', 'Cost Optimization'],
    category: 'Cloud'
  },
  {
    icon: Users,
    title: 'Team Augmentation',
    description: 'Extend your development team with our skilled professionals to accelerate your project delivery.',
    features: ['Skilled Developers', 'Flexible Engagement', 'Quick Onboarding', 'Project Management'],
    category: 'Consulting'
  },
  {
    icon: Settings,
    title: 'API Development',
    description: 'RESTful and GraphQL API development with proper documentation, testing, and monitoring capabilities.',
    features: ['REST & GraphQL', 'API Documentation', 'Rate Limiting', 'Monitoring'],
    category: 'Development'
  }
]

export function ServicesGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary">{service.category}</Badge>
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm leading-relaxed">
                {service.description}
              </CardDescription>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
