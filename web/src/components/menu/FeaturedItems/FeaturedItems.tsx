import type { Product } from 'src/types/menu'
import { MenuItemCard } from 'src/components/menu/MenuItemCard/MenuItemCard'

interface FeaturedItemsProps {
  products: Product[]
  title?: string
}

export function FeaturedItems({ products, title = 'Featured Items' }: FeaturedItemsProps) {
  if (products.length === 0) return null

  return (
    <section aria-labelledby="featured-items-title" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="featured-items-title" className="mb-8 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">{title}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <MenuItemCard key={product.id} product={product} categoryHandle={product.categoryHandle} />
          ))}
        </div>
      </div>
    </section>
  )
}
