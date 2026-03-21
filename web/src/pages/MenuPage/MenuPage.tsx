import { Metadata } from '@redwoodjs/web'
import { getCollections } from 'src/data/mock-helpers'
import { CategoryNav } from 'src/components/menu/CategoryNav/CategoryNav'
import { CategorySection } from 'src/components/menu/CategorySection/CategorySection'

const MenuPage = () => {
  const collections = getCollections()

  return (
    <div>
      <Metadata title="Our Menu" description="Browse the full Redwood Diner menu — burgers, breakfast, sandwiches, sides, drinks, and desserts." />
      <CategoryNav categories={collections} useAnchorLinks={true} />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-4xl font-bold text-stone-900 sm:text-5xl">Our Menu</h1>
          <p className="mt-2 max-w-2xl text-base text-stone-500">Everything made fresh to order. Browse by category or scroll through the whole thing.</p>
        </div>
        {collections.map((collection) => (
          <CategorySection key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  )
}

export default MenuPage
