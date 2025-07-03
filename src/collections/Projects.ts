import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Project Slug',
      admin: {
        description: 'URL-friendly version of the title (e.g., ecommerce-platform)',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Project Description',
      editor: lexicalEditor(),
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: false,
      label: 'Short Description',
      admin: {
        description: 'Brief description for preview cards',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Cover Image',
    },
    {
      name: 'gallery',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          required: false,
        },
      ],
      label: 'Project Gallery',
    },
    // {
    //   name: 'category',
    //   type: 'relationship',
    //   relationTo: 'project-categories',
    //   required: true,
    //   label: 'Project Category',
    // },
    {
      name: 'technologies',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
      label: 'Technologies Used',
      admin: {
        description: 'List of technologies, frameworks, or tools used in this project',
      },
    },
    {
      name: 'year',
      type: 'number',
      required: true,
      label: 'Project Year',
      admin: {
        description: 'Year when the project was completed',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      required: false,
      defaultValue: false,
      label: 'Featured Project',
      admin: {
        description: 'Check to feature this project on the homepage',
      },
    },
    {
      name: 'testimonial',
      type: 'group',
      required: false,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: false,
          label: 'Testimonial Text',
        },
        {
          name: 'author',
          type: 'text',
          required: false,
          label: 'Author Name',
        },
        {
          name: 'position',
          type: 'text',
          required: false,
          label: 'Author Position',
        },
        {
          name: 'company',
          type: 'text',
          required: false,
          label: 'Company Name',
        },
      ],
      label: 'Client Testimonial',
    },
    {
      name: 'projectUrl',
      type: 'text',
      required: false,
      label: 'Project URL',
      admin: {
        description: 'Live project URL (optional)',
      },
    },
    {
      name: 'githubUrl',
      type: 'text',
      required: false,
      label: 'GitHub URL',
      admin: {
        description: 'GitHub repository URL (optional)',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: false,
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      required: false,
      defaultValue: true,
      label: 'Active',
      admin: {
        description: 'Uncheck to hide this project from the website',
      },
    },
  ],
}
