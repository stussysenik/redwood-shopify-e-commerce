import { Link } from '@redwoodjs/router'
import type { Collection } from 'src/types/menu'

interface CategoryNavProps {
  categories: Collection[]
  activeCategory?: string
  useAnchorLinks?: boolean
}

export function CategoryNav({ categories, activeCategory, useAnchorLinks = false }: CategoryNavProps) {
  return (
    <nav aria-label="Menu categories" className="sticky top-[64px] z-40 border-b border-stone-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {categories.map((category) => {
            const isActive = activeCategory === category.handle
            const href = useAnchorLinks ? `#${category.handle}` : `/menu/${category.handle}`

            return useAnchorLinks ? (
              <a
                key={category.id}
                href={href}
                className={[
                  'inline-flex shrink-0 items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
                  isActive
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'border border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800',
                ].join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                {category.title}
              </a>
            ) : (
              <Link
                key={category.id}
                to={href}
                className={[
                  'inline-flex shrink-0 items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
                  isActive
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'border border-stone-200 text-stone-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800',
                ].join(' ')}
                aria-current={isActive ? 'page' : undefined}
              >
                {category.title}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
