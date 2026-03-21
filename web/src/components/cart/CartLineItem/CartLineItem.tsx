import type { CartItem } from 'src/types/menu'
import { useCart } from 'src/hooks/use-cart'
import { formatPrice, getLineItemTotal } from 'src/lib/utils'
import { CartQuantitySelector } from 'src/components/cart/CartQuantitySelector/CartQuantitySelector'

interface CartLineItemProps {
  item: CartItem
}

export function CartLineItem({ item }: CartLineItemProps) {
  const { removeItem, updateQuantity } = useCart()
  const customDescription = item.attributes.find((a) => a.key === 'customDescription')?.value
  const showVariant = item.variant.title !== 'Default Title' && item.variant.title !== 'Default'
  const image = item.product.images[0]
  const unitPrice = formatPrice(item.variant.price.amount)
  const lineTotal = getLineItemTotal(item)

  function handleIncrease() { updateQuantity(item.id, item.quantity + 1) }
  function handleDecrease() { updateQuantity(item.id, item.quantity - 1) }
  function handleRemove() { removeItem(item.id) }

  return (
    <li className="flex gap-4 py-5">
      {image ? (
        <img src={image.url} alt={image.altText || item.product.title} width={80} height={80} className="h-20 w-20 flex-shrink-0 rounded-lg object-cover border border-stone-100" />
      ) : (
        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-stone-100 border border-stone-200" aria-hidden="true">
          {item.product.emoji ? (
            <span className="text-3xl select-none">{item.product.emoji}</span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-medium text-stone-900 leading-snug">{item.product.title}</p>
            {showVariant && <p className="mt-0.5 text-sm text-stone-500">{item.variant.title}</p>}
            {customDescription && <p className="mt-1 text-sm italic text-amber-800 line-clamp-3">&ldquo;{customDescription}&rdquo;</p>}
            <p className="mt-1 text-xs text-stone-400">{unitPrice} each</p>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="font-semibold text-stone-900 tabular-nums">{lineTotal}</span>
            <button type="button" onClick={handleRemove} aria-label={`Remove ${item.product.title} from cart`} className="text-stone-400 transition-colors hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                <path d="M10 11v6" />
                <path d="M14 11v6" />
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
            </button>
          </div>
        </div>
        <CartQuantitySelector quantity={item.quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} />
      </div>
    </li>
  )
}
