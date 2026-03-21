import { Link } from '@redwoodjs/router'
import type { Product } from 'src/types/menu'
import { formatPrice } from 'src/lib/utils'
import { Badge } from 'src/components/ui/Badge/Badge'

interface MenuItemCardProps {
  product: Product
  categoryHandle: string
}

const CATEGORY_EMOJI: Record<string, string> = {
  burgers: '🍔',
  breakfast: '🍳',
  sandwiches: '🥪',
  sides: '🍟',
  drinks: '🥤',
  desserts: '🍰',
}

function getPlaceholderEmoji(product: Product, categoryHandle: string): string {
  return product.emoji || CATEGORY_EMOJI[categoryHandle] || '🍽️'
}

export function MenuItemCard({ product, categoryHandle }: MenuItemCardProps) {
  const primaryVariant = product.variants[0]
  const price = primaryVariant?.price.amount ?? '0'
  const emoji = getPlaceholderEmoji(product, categoryHandle)

  return (
    <Link
      to={`/menu/${categoryHandle}/${product.handle}`}
      className="group hover-lift flex flex-col rounded-xl bg-white shadow-sm ring-1 ring-stone-100 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      aria-label={`View ${product.title}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100">
        {product.images.length > 0 ? (
          <img src={product.images[0].url} alt={product.images[0].altText || product.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center" aria-hidden="true">
            <span className="text-5xl select-none">{emoji}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif text-base font-semibold leading-snug text-stone-900 group-hover:text-amber-800 transition-colors">
          {product.title}
        </h3>
        {product.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-stone-500">{product.description}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <span className="text-sm font-semibold text-amber-700">{formatPrice(price)}</span>
          {product.badges.length > 0 && (
            <div className="flex flex-wrap items-center justify-end gap-1">
              {product.badges.map((badge) => (
                <Badge key={badge} type={badge} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
