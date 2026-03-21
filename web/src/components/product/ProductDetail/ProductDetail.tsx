import { useState } from 'react'
import { Link } from '@redwoodjs/router'
import type { Product } from 'src/types/menu'
import { MIN_CUSTOM_DESCRIPTION_LENGTH } from 'src/lib/constants'
import { ProductImage } from 'src/components/product/ProductImage/ProductImage'
import { ProductPrice } from 'src/components/product/ProductPrice/ProductPrice'
import { DescribeYourOwnForm } from 'src/components/product/DescribeYourOwnForm/DescribeYourOwnForm'
import { AddToCartButton } from 'src/components/cart/AddToCartButton/AddToCartButton'
import { Badge } from 'src/components/ui/Badge/Badge'

interface ProductDetailProps {
  product: Product
  categoryTitle?: string
}

export function ProductDetail({ product, categoryTitle }: ProductDetailProps) {
  const [description, setDescription] = useState('')

  const primaryVariant = product.variants[0]
  const isDescribeYourOwn = product.isDescribeYourOwn
  const descriptionMeetsMinimum = description.length >= MIN_CUSTOM_DESCRIPTION_LENGTH
  const addToCartDisabled = isDescribeYourOwn && !descriptionMeetsMinimum

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <ProductImage image={product.images[0]} title={product.title} emoji={product.emoji} />
        </div>
        <div className="flex flex-col gap-6">
          <nav className="flex items-center gap-2 text-sm text-stone-400" aria-label="Breadcrumb">
            <Link to="/menu" className="rounded transition-colors hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">Menu</Link>
            <span aria-hidden="true">&rsaquo;</span>
            <Link to={`/menu/${product.categoryHandle}`} className="rounded transition-colors hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
              {categoryTitle ?? product.categoryHandle}
            </Link>
            <span aria-hidden="true">&rsaquo;</span>
            <span className="text-stone-600 font-medium" aria-current="page">{product.title}</span>
          </nav>
          <h1 className="font-serif text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">{product.title}</h1>
          {product.badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge) => (<Badge key={badge} type={badge} />))}
            </div>
          )}
          {primaryVariant && <ProductPrice amount={primaryVariant.price.amount} size="lg" />}
          {product.descriptionHtml && (
            <div className="prose prose-stone prose-sm max-w-none leading-relaxed text-stone-600" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          )}
          {isDescribeYourOwn && (
            <DescribeYourOwnForm description={description} onDescriptionChange={setDescription} />
          )}
          {primaryVariant && (
            <div className="pt-2">
              <AddToCartButton product={product} variant={primaryVariant} disabled={addToCartDisabled} customDescription={isDescribeYourOwn ? description : undefined} />
              {isDescribeYourOwn && !descriptionMeetsMinimum && (
                <p className="mt-2 text-center text-xs text-stone-400">Add a description above to enable ordering</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
