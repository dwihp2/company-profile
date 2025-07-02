import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Media } from '@/payload-types'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No projects available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
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
            {project.featured && (
              <Badge className="absolute top-4 right-4">Featured</Badge>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
              <Button size="sm" variant="secondary" asChild>
                <Link href={`/projects/${project.slug}`}>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                {project.category && (
                  <Badge variant="secondary">{project.category}</Badge>
                )}
                {project.year && (
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.shortDescription ||
                    (typeof project.description === 'string'
                      ? project.description
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
  )
}
