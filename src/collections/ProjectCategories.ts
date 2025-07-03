import type { CollectionConfig } from 'payload'

export const ProjectCategories: CollectionConfig = {
  slug: 'project-categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Category Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Category Slug',
      admin: {
        description: 'URL-friendly version of the name (e.g., web-development)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Category Description',
    },
    {
      name: 'color',
      type: 'select',
      required: false,
      options: [
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Purple', value: 'purple' },
        { label: 'Red', value: 'red' },
        { label: 'Orange', value: 'orange' },
        { label: 'Pink', value: 'pink' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Gray', value: 'gray' },
      ],
      label: 'Display Color',
      admin: {
        description: 'Color theme for this category',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: false,
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers appear first in filters',
      },
    },
  ],
}
