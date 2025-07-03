import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Calendar } from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/lib/payload'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { RichText } from '@/components/ui/rich-text'
import { GalleryLightbox } from '@/components/ui/gallery-lightbox'

// Add export for revalidation timing - 60 seconds is a good starting point
export const revalidate = 60

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const projects = await getAllProjects()
    return projects.map((project) => ({
      slug: project.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return [] // Return empty array if database isn't ready
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.shortDescription || 'Project details and case study',
    openGraph: {
      title: project.title,
      description: project.shortDescription || 'Project details and case study',
      images: project.coverImage && typeof project.coverImage === 'object' && 'url' in project.coverImage
        ? [{ url: project.coverImage.url || '' }]
        : [],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project header */}
      <div className="mb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{project.title}</h1>
            {project.shortDescription && (
              <p className="text-xl text-muted-foreground mb-6">
                {project.shortDescription}
              </p>
            )}

            <div className="flex flex-wrap gap-4 mb-6">
              {project.year && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.year}</span>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              {project.projectUrl && (
                <Button asChild>
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
            {project.coverImage && typeof project.coverImage === 'object' && 'url' in project.coverImage ? (
              <Image
                src={project.coverImage.url || ''}
                alt={project.coverImage.alt || project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-muted-foreground">
                {project.title.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project description */}
          {project.description && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <RichText content={project.description} />
            </section>
          )}

          {/* Project gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
              <GalleryLightbox
                images={project.gallery.map(item => ({
                  image: typeof item.image === 'object' ? {
                    url: item.image.url || '',
                    alt: item.image.alt || ''
                  } : item.image,
                  caption: item.caption,
                  id: item.id
                }))}
              />
            </section>
          )}

          {/* Client testimonial */}
          {project.testimonial && project.testimonial.text && (
            <section>
              <h2 className="text-2xl font-semibold mb-6">Client Testimonial</h2>
              <Card>
                <CardContent className="p-6">
                  <blockquote className="text-lg italic mb-4">
                    &ldquo;{project.testimonial.text}&rdquo;
                  </blockquote>
                  {(project.testimonial.author || project.testimonial.position || project.testimonial.company) && (
                    <div className="text-sm text-muted-foreground">
                      {project.testimonial.author && (
                        <div className="font-medium">{project.testimonial.author}</div>
                      )}
                      {project.testimonial.position && project.testimonial.company && (
                        <div>{project.testimonial.position} at {project.testimonial.company}</div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={`tech-${index}`} variant="secondary">
                      {tech.technology}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Project details */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                {project.year && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span>{project.year}</span>
                  </div>
                )}
                {project.featured && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="default" className="text-xs">Featured</Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Project links */}
          {(project.projectUrl || project.githubUrl) && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.projectUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Project
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
