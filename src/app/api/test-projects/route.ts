import { getPayloadClient } from '@/lib/payload'

export async function GET() {
  try {
    const payload = await getPayloadClient()

    // Get all projects to debug
    const projects = await payload.find({
      collection: 'projects',
      depth: 1,
    })

    return Response.json({
      success: true,
      totalProjects: projects.totalDocs,
      projects: projects.docs.map(p => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        isActive: p.isActive
      }))
    })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
