import { useCart } from 'src/hooks/use-cart'
import { CartLineItem } from 'src/components/cart/CartLineItem/CartLineItem'
import { CartSummary } from 'src/components/cart/CartSummary/CartSummary'
import { EmptyState } from 'src/components/ui/EmptyState/EmptyState'

interface CartMainProps {
  layout: 'page' | 'aside'
}

export function CartMain({ layout }: CartMainProps) {
  const { cart } = useCart()
  const { lines, totalQuantity } = cart
  const isEmpty = lines.length === 0

  if (isEmpty) {
    return <EmptyState title="Your cart is empty" message="Looks like you haven't added anything yet." actionLabel="Browse Menu" actionLink="/menu" />
  }

  if (layout === 'page') {
    return (
      <div>
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-stone-900">Your Cart</h1>
          <p className="mt-1 text-sm text-stone-500">{totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <ul className="divide-y divide-stone-100" aria-label="Cart items">
              {lines.map((item) => (<CartLineItem key={item.id} item={item} />))}
            </ul>
          </div>
          <div className="lg:sticky lg:top-24 self-start">
            <CartSummary lines={lines} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <ul className="divide-y divide-stone-100" aria-label="Cart items">
        {lines.map((item) => (<CartLineItem key={item.id} item={item} />))}
      </ul>
      <CartSummary lines={lines} />
    </div>
  )
}
