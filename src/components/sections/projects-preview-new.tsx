import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

interface Project {
  id: string
  title: string
  description: string | object
  shortDescription?: string
  coverImage?: Media | string
  slug: string
  category?: string
  technologies?: Array<{ technology: string }>
  year?: string
  featured?: boolean
  isActive: boolean
}

interface ProjectsPreviewProps {
  projects: Project[]
}

export function ProjectsPreview({ projects }: ProjectsPreviewProps) {
  // Get up to 3 featured projects
  const featuredProjects = projects?.slice(0, 3) || [];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover some of our recent work and the impact we&apos;ve made for our clients
          </p>
        </div>

        {featuredProjects.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Projects coming soon</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl relative">
                  {project.coverImage && typeof project.coverImage === 'object' && 'url' in project.coverImage ? (
                    <Image
                      src={project.coverImage.url || ''}
                      alt={project.coverImage.alt || project.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-6xl">{project.title.charAt(0)}</div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {project.category && (
                        <Badge variant="secondary">{project.category}</Badge>
                      )}
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/projects/${project.slug}`}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription ||
                          (typeof project.description === 'string'
                            ? project.description.substring(0, 120) + (project.description.length > 120 ? '...' : '')
                            : 'Project description available in CMS'
                          )
                        }
                      </p>
                    </div>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={`tech-${techIndex}-${tech.technology}`} variant="outline" className="text-xs">
                            {tech.technology}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

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
