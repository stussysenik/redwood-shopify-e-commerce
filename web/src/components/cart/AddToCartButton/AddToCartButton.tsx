import { useState } from 'react'
import type { Product, ProductVariant } from 'src/types/menu'
import { useCart } from 'src/hooks/use-cart'
import { formatPrice } from 'src/lib/utils'

interface AddToCartButtonProps {
  product: Product
  variant: ProductVariant
  disabled?: boolean
  customDescription?: string
}

export function AddToCartButton({ product, variant, disabled = false, customDescription }: AddToCartButtonProps) {
  const { addItem, openCart } = useCart()
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    if (disabled) return
    const attributes = customDescription ? [{ key: 'customDescription', value: customDescription }] : []
    addItem(product, variant, 1, attributes)
    openCart()
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const price = variant.price.amount
  const label = added ? 'Added!' : `Add to Cart — ${formatPrice(price)}`

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      disabled={disabled}
      aria-label={disabled ? 'Complete your description to add to cart' : label}
      className={[
        'w-full rounded-lg py-3 px-6 font-semibold text-base transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500',
        added
          ? 'bg-green-600 text-white cursor-default'
          : disabled
            ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
            : 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800',
      ].join(' ')}
    >
      {label}
    </button>
  )
}
