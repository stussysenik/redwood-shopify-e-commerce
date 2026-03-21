import { Link } from '@redwoodjs/router'
import type { Product } from 'src/types/menu'
import { formatPrice } from 'src/lib/utils'
import { Badge } from 'src/components/ui/Badge/Badge'

interface DescribeYourOwnCardProps {
  product: Product
  categoryHandle: string
}

function PencilIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

export function DescribeYourOwnCard({ product, categoryHandle }: DescribeYourOwnCardProps) {
  const primaryVariant = product.variants[0]
  const price = primaryVariant?.price.amount ?? '0'

  return (
    <Link
      to={`/menu/${categoryHandle}/${product.handle}`}
      className="group hover-lift flex flex-col rounded-xl border-2 border-dashed border-amber-300 bg-white transition-all duration-200 hover:border-amber-400 hover:bg-amber-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
      aria-label={`Customize: ${product.title}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-[10px] bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="flex h-full flex-col items-center justify-center gap-2" aria-hidden="true">
          <PencilIcon />
          <span className="text-xs font-medium tracking-wide text-amber-500 uppercase">Create Your Own</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif text-base font-semibold leading-snug text-stone-900 group-hover:text-amber-800 transition-colors">{product.title}</h3>
        {product.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-stone-500">{product.description}</p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <span className="text-sm font-semibold text-amber-700">{formatPrice(price)}</span>
          {product.badges.length > 0 && (
            <div className="flex flex-wrap items-center justify-end gap-1">
              {product.badges.map((badge) => (<Badge key={badge} type={badge} />))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
