interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export function PageHeader({ title, description, className = '' }: PageHeaderProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
