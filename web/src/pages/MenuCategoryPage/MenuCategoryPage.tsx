import { Metadata } from '@redwoodjs/web'
import { useParams, Redirect } from '@redwoodjs/router'
import { getCollectionByHandle, getCollections } from 'src/data/mock-helpers'
import { CategoryNav } from 'src/components/menu/CategoryNav/CategoryNav'
import { MenuItemCard } from 'src/components/menu/MenuItemCard/MenuItemCard'
import { DescribeYourOwnCard } from 'src/components/menu/DescribeYourOwnCard/DescribeYourOwnCard'

const MenuCategoryPage = () => {
  const { category } = useParams()
  const collection = getCollectionByHandle(category || '')
  const allCollections = getCollections()

  if (!collection) {
    return <Redirect to="/menu" />
  }

  return (
    <div>
      <Metadata title={`${collection.title} — Redwood Diner`} description={collection.description} />
      <CategoryNav categories={allCollections} activeCategory={category} useAnchorLinks={false} />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-bold text-stone-900 sm:text-5xl">{collection.title}</h1>
          {collection.description && (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-stone-500">{collection.description}</p>
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
      </div>
    </div>
  )
}

export default MenuCategoryPage
