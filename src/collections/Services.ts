import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'order', 'updatedAt'],
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
      label: 'Service Title',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Service Description',
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
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Service Icon/Image',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Development', value: 'development' },
        { label: 'Mobile', value: 'mobile' },
        { label: 'Strategy', value: 'strategy' },
        { label: 'Marketing', value: 'marketing' },
        { label: 'Security', value: 'security' },
        { label: 'Cloud', value: 'cloud' },
        { label: 'Consulting', value: 'consulting' },
        { label: 'Design', value: 'design' },
      ],
      label: 'Service Category',
    },
    {
      name: 'features',
      type: 'array',
      required: false,
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
      label: 'Key Features',
      admin: {
        description: 'List of key features for this service',
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
        description: 'Uncheck to hide this service from the website',
      },
    },
  ],
}
