import { Metadata } from '@redwoodjs/web'
import { useParams } from '@redwoodjs/router'
import { getProductByHandle, getCollectionByHandle } from 'src/data/mock-helpers'
import { ProductDetail } from 'src/components/product/ProductDetail/ProductDetail'

const ProductDetailPage = () => {
  const { category, handle } = useParams()
  const product = getProductByHandle(handle || '')
  const collection = getCollectionByHandle(category || '')

  if (!product || product.categoryHandle !== category || !collection) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-6xl select-none" aria-hidden="true">🍽️</p>
        <h1 className="font-serif text-3xl font-bold text-stone-900">Item Not Found</h1>
        <p className="mt-2 text-stone-500">That menu item doesn't exist at this address.</p>
      </div>
    )
  }

  return (
    <div>
      <Metadata title={`${product.title} — Redwood Diner`} description={product.description} />
      <ProductDetail product={product} categoryTitle={collection.title} />
    </div>
  )
}

export default ProductDetailPage
