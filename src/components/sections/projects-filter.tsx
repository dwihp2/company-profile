'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const categories = [
  'All Projects',
  'Web Development',
  'Mobile Apps',
  'E-commerce',
  'Analytics',
  'Design'
]

export function ProjectsFilter() {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category)}
            className="rounded-full"
          >
            {category}
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
