import { Link } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { getFeaturedProducts, getCollections } from 'src/data/mock-helpers'
import { Hero } from 'src/components/ui/Hero/Hero'
import { FeaturedItems } from 'src/components/menu/FeaturedItems/FeaturedItems'
import { MenuItemCard } from 'src/components/menu/MenuItemCard/MenuItemCard'

const HomePage = () => {
  const featured = getFeaturedProducts().slice(0, 8)
  const collections = getCollections()

  return (
    <div>
      <Metadata title="Home" description="Welcome to Redwood Diner — classic American comfort food, crafted with care." />
      <Hero />
      <section className="py-16 bg-white">
        <FeaturedItems products={featured} title="Our Favourites" />
      </section>
      <section className="py-16 bg-amber-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {collections.map((collection) => {
            const previewItems = collection.products.filter((p) => !p.isDescribeYourOwn).slice(0, 4)
            if (previewItems.length === 0) return null
            return (
              <div key={collection.id}>
                <div className="flex items-baseline justify-between mb-6">
                  <h2 className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">{collection.title}</h2>
                  <Link to={`/menu/${collection.handle}`} className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline underline-offset-2 transition-colors">
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {previewItems.map((product) => (
                    <MenuItemCard key={product.id} product={product} categoryHandle={collection.handle} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Ready to Order?</h2>
          <p className="mt-4 text-lg text-amber-100 max-w-md mx-auto">Browse the full menu and pick your favourites — we'll have it ready fresh for you.</p>
          <Link to="/menu" className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-base font-semibold text-amber-700 shadow-sm transition-colors duration-200 hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-600">
            See the Full Menu
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
