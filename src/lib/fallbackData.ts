// This file contains fallback data for when the database isn't available
// It's used during the build process to prevent build failures

export const fallbackProjects = [
  {
    id: 'fallback-1',
    title: 'Sample Project',
    slug: 'sample-project',
    shortDescription: 'This is a sample project used as fallback during build',
    isActive: true
  }
];

export const fallbackServices = [
  {
    id: 'fallback-1',
    title: 'Sample Service',
    category: 'Web Development',
    shortDescription: 'This is a sample service used as fallback during build',
    isActive: true
  }
];

export const fallbackCategories = [
  {
    id: 'fallback-1',
    name: 'Sample Category',
    slug: 'sample-category'
  }
];
