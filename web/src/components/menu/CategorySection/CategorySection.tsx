import type { Collection } from 'src/types/menu'
import { MenuItemCard } from 'src/components/menu/MenuItemCard/MenuItemCard'
import { DescribeYourOwnCard } from 'src/components/menu/DescribeYourOwnCard/DescribeYourOwnCard'

interface CategorySectionProps {
  collection: Collection
}

export function CategorySection({ collection }: CategorySectionProps) {
  return (
    <section id={collection.handle} aria-labelledby={`section-title-${collection.handle}`} className="scroll-mt-32 py-10">
      <div className="mb-6">
        <h2 id={`section-title-${collection.handle}`} className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">{collection.title}</h2>
        {collection.description && (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-stone-500">{collection.description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {collection.products.map((product) =>
          product.isDescribeYourOwn ? (
            <DescribeYourOwnCard key={product.id} product={product} categoryHandle={collection.handle} />
          ) : (
            <MenuItemCard key={product.id} product={product} categoryHandle={collection.handle} />
          ),
        )}
      </div>
    </section>
  )
}
