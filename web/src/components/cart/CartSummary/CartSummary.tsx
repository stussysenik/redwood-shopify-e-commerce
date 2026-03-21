import { Link } from '@redwoodjs/router'
import type { CartItem } from 'src/types/menu'
import { calculateCartTotal } from 'src/lib/utils'

interface CartSummaryProps {
  lines: CartItem[]
}

export function CartSummary({ lines }: CartSummaryProps) {
  const subtotal = calculateCartTotal(lines)

  return (
    <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 space-y-5">
      <h2 className="font-serif text-lg font-semibold text-stone-900">Order Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-stone-600">Subtotal</span>
          <span className="tabular-nums text-stone-900">{subtotal}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-stone-600">Tax</span>
          <span className="text-stone-400 text-xs">Calculated at checkout</span>
        </div>
      </div>
      <div className="border-t border-stone-200" />
      <div className="flex items-center justify-between">
        <span className="font-semibold text-stone-900">Total</span>
        <span className="text-xl font-bold tabular-nums text-stone-900">{subtotal}</span>
      </div>
      <div className="group relative">
        <button type="button" disabled aria-disabled="true" className="flex w-full cursor-not-allowed items-center justify-center rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white opacity-60 transition-opacity">
          Proceed to Checkout
        </button>
        <span role="tooltip" className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-800 px-2.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
          Coming soon
        </span>
      </div>
      <Link to="/menu" className="flex w-full items-center justify-center rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
        Continue Shopping
      </Link>
    </div>
  )
}
