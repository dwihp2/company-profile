import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink } from 'lucide-react'

const featuredProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with advanced analytics and user experience.',
    image: '🛒',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application with biometric authentication.',
    image: '📱',
    category: 'Mobile App',
    technologies: ['React Native', 'TypeScript', 'Firebase']
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time business intelligence dashboard with interactive visualizations.',
    image: '📊',
    category: 'Data Analytics',
    technologies: ['Vue.js', 'D3.js', 'Python']
  }
]

export function ProjectsPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover some of our recent work and the impact we&apos;ve made for our clients
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
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

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
