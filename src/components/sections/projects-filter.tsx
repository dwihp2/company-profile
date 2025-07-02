'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProjectCategory {
  id: string
  name: string
  slug: string
  order?: number
}

interface ProjectsFilterProps {
  categories?: ProjectCategory[]
}

export function ProjectsFilter({ categories = [] }: ProjectsFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  // Always add "All Projects" as the first option
  const displayCategories = [
    { id: 'all', name: 'All Projects', slug: 'all' },
    ...categories
  ]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {displayCategories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.name ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.name)}
            className="rounded-full"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="text-center">
        <Badge variant="secondary">
          Showing {activeCategory === 'All Projects' ? 'all' : activeCategory.toLowerCase()} projects
        </Badge>
      </div>
    </div>
  )
}
