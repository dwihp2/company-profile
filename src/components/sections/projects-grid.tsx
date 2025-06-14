import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced analytics, inventory management, and seamless payment integration.',
    image: '🛒',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2024',
    featured: true
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
    image: '📱',
    category: 'Mobile Apps',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometrics'],
    year: '2024',
    featured: true
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with interactive charts and automated reporting features.',
    image: '📊',
    category: 'Analytics',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Redis'],
    year: '2023',
    featured: false
  },
  {
    title: 'Restaurant Chain Website',
    description: 'Multi-location restaurant website with online ordering, table reservations, and loyalty program.',
    image: '🍕',
    category: 'Web Development',
    technologies: ['Next.js', 'Tailwind', 'Supabase', 'Vercel'],
    year: '2023',
    featured: false
  },
  {
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness application with workout tracking, nutrition planning, and social features.',
    image: '💪',
    category: 'Mobile Apps',
    technologies: ['Flutter', 'Dart', 'Health Kit', 'Google Fit'],
    year: '2023',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'Creative portfolio website for a design agency with smooth animations and project showcases.',
    image: '🎨',
    category: 'Design',
    technologies: ['Nuxt.js', 'GSAP', 'Contentful', 'Netlify'],
    year: '2024',
    featured: false
  }
]

export function ProjectsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl relative">
            {project.image}
            {project.featured && (
              <Badge className="absolute top-4 right-4">Featured</Badge>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
              <Button size="sm" variant="secondary">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary">{project.category}</Badge>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
