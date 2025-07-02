import configPromise from '@payload-config'
import { getPayload, type Payload } from 'payload'
import type { Project as PayloadProject, ProjectCategory as PayloadProjectCategory, Media as PayloadMedia, Service as PayloadService } from '@/payload-types'
import { fallbackProjects, fallbackServices, fallbackCategories } from './fallbackData'

// Define RichText interface for components
interface LexicalNode {
  type: string;
  text?: string;
  format?: number;
  children?: LexicalNode[];
  tag?: string;
  listType?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
  };
}

export interface RichTextContent {
  root?: {
    children?: LexicalNode[];
  };
}

// Define component-compatible interfaces
export interface Project {
  id: string
  title: string
  description: RichTextContent
  shortDescription?: string
  coverImage?: PayloadMedia | string
  slug: string
  category?: string
  technologies?: Array<{ technology: string }>
  year?: string
  featured?: boolean
  isActive: boolean
  // Additional fields needed for project detail page
  projectUrl?: string
  githubUrl?: string
  gallery?: Array<{
    image: PayloadMedia
    caption?: string
    id?: string
  }>
  testimonial?: {
    text?: string
    author?: string
    position?: string
    company?: string
  }
}

export interface ProjectCategory {
  id: string
  name: string
  slug: string
  order?: number
}

export interface Service {
  id: string
  title: string
  description: RichTextContent
  shortDescription?: string
  icon?: PayloadMedia
  category: string
  features?: Array<{ feature: string, id?: string }>
  order?: number
  isActive: boolean
}

let payload: Payload | null = null

// Adapter functions to convert Payload types to component-compatible types
export const adaptProject = (project: PayloadProject): Project => {
  // Handle coverImage - could be Media object, number (ID), or null
  let coverImage: PayloadMedia | string | undefined = undefined;

  if (project.coverImage) {
    if (typeof project.coverImage === 'number') {
      // If it's just an ID, convert to string
      coverImage = String(project.coverImage);
    } else {
      // It's a Media object
      coverImage = project.coverImage;
    }
  }

  // Process gallery items if they exist
  const gallery = project.gallery?.map(item => ({
    image: typeof item.image === 'number'
      ? { id: item.image } as PayloadMedia // Simplified Media object with just ID
      : item.image,
    caption: item.caption || undefined,
    id: item.id || undefined
  }));

  return {
    id: String(project.id),
    title: project.title,
    description: project.description as RichTextContent,
    shortDescription: project.shortDescription || undefined,
    coverImage,
    slug: project.slug,
    category: undefined, // Not directly available in payload type
    technologies: project.technologies?.map(tech => ({ technology: tech.technology })) || undefined,
    year: project.year ? String(project.year) : undefined,
    featured: !!project.featured,
    isActive: !!project.isActive,
    // Additional fields
    projectUrl: project.projectUrl || undefined,
    githubUrl: project.githubUrl || undefined,
    gallery: gallery || undefined,
    testimonial: project.testimonial
      ? {
        text: project.testimonial.text || undefined,
        author: project.testimonial.author || undefined,
        position: project.testimonial.position || undefined,
        company: project.testimonial.company || undefined,
      }
      : undefined,
  };
}

export const adaptProjectCategory = (category: PayloadProjectCategory): ProjectCategory => ({
  id: String(category.id),
  name: category.name,
  slug: category.slug,
  order: category.order || undefined,
})

export const getPayloadClient = async () => {
  if (!payload) {
    payload = await getPayload({ config: configPromise })
  }
  return payload
}

export const getServices = async (): Promise<Service[]> => {
  try {
    const payload = await getPayloadClient()
    const services = await payload.find({
      collection: 'services',
      where: {
        isActive: {
          equals: true,
        },
      },
      sort: 'order',
      depth: 1, // Populate one level of relationships
    })
    return services.docs.map(adaptService)
  } catch (error) {
    console.error('Error fetching services:', error)
    // Use fallback data during build if database is not available
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      console.log('Using fallback service data')
      return fallbackServices.map(service => ({
        ...service,
        description: { root: { children: [] } } as RichTextContent
      } as Service))
    }
    return []
  }
}

export const getProjects = async (featured?: boolean): Promise<Project[]> => {
  try {
    const payload = await getPayloadClient()
    const whereClause = {
      isActive: {
        equals: true,
      },
    } as const

    const whereWithFeatured = featured !== undefined
      ? {
        ...whereClause,
        featured: {
          equals: featured
        }
      }
      : whereClause

    const projects = await payload.find({
      collection: 'projects',
      where: whereWithFeatured,
      sort: featured ? '-featured,order' : 'order',
      depth: 1, // Populate one level of relationships
    })
    return projects.docs.map(adaptProject)
  } catch (error) {
    console.error('Error fetching projects:', error)
    // Use fallback data during build if database is not available
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      console.log('Using fallback project data')
      return fallbackProjects.map(project => ({
        ...project,
        description: { root: { children: [] } } as RichTextContent
      } as Project))
    }
    return []
  }
}

export const getProjectCategories = async (): Promise<ProjectCategory[]> => {
  try {
    const payload = await getPayloadClient()
    const categories = await payload.find({
      collection: 'project-categories',
      sort: 'order',
    })
    return categories.docs.map(adaptProjectCategory)
  } catch (error) {
    console.error('Error fetching project categories:', error)
    // Use fallback data during build if database is not available
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      console.log('Using fallback category data')
      return fallbackCategories.map(category => category as ProjectCategory)
    }
    return []
  }
}

export const getFeaturedProjects = async (): Promise<Project[]> => {
  return getProjects(true)
}

export const getAllProjects = async (): Promise<Project[]> => {
  return getProjects()
}

export const getServiceBySlug = async (slug: string) => {
  try {
    const payload = await getPayloadClient()
    const service = await payload.find({
      collection: 'services',
      where: {
        slug: {
          equals: slug,
        },
        isActive: {
          equals: true,
        },
      },
      limit: 1,
      depth: 1, // Populate relationships
    })

    return service.docs[0] || null
  } catch (error) {
    console.error(`Error fetching service with slug ${slug}:`, error)
    return null
  }
}

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
  try {
    const payload = await getPayloadClient()
    const project = await payload.find({
      collection: 'projects',
      where: {
        slug: {
          equals: slug,
        },
        isActive: {
          equals: true,
        },
      },
      limit: 1,
      depth: 1, // Populate relationships
    })

    return project.docs[0] ? adaptProject(project.docs[0]) : null
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error)
    // Use fallback data during build if database is not available
    if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
      console.log('Using fallback project data for slug', slug)
      const fallbackProject = fallbackProjects.find(p => p.slug === slug)
      if (fallbackProject) {
        return {
          ...fallbackProject,
          description: { root: { children: [] } } as RichTextContent
        } as Project
      }
    }
    return null
  }
}

// Adapter function for Service
export const adaptService = (service: PayloadService): Service => {
  // Handle icon - could be Media object, number (ID), or null
  let icon: PayloadMedia | undefined = undefined;

  if (service.icon) {
    if (typeof service.icon === 'number') {
      // Skip if it's just an ID
      // icon will remain undefined 
    } else {
      // It's a Media object
      icon = service.icon;
    }
  }

  return {
    id: String(service.id),
    title: service.title,
    description: service.description as RichTextContent,
    shortDescription: service.shortDescription || undefined,
    icon,
    category: service.category,
    features: service.features?.map(feat => ({
      feature: feat.feature,
      id: feat.id || undefined
    })) || undefined,
    order: service.order || undefined,
    isActive: !!service.isActive,
  };
}
