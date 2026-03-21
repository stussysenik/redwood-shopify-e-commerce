interface CartQuantitySelectorProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

export function CartQuantitySelector({ quantity, onIncrease, onDecrease, onRemove }: CartQuantitySelectorProps) {
  const isOne = quantity === 1

  return (
    <div className="flex items-center gap-1">
      <button type="button" onClick={isOne ? onRemove : onDecrease} aria-label={isOne ? 'Remove item' : 'Decrease quantity'} className="flex h-7 w-7 items-center justify-center rounded border border-stone-300 text-stone-600 transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
        {isOne ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
      </button>
      <span className="w-7 text-center text-sm font-medium tabular-nums text-stone-900" aria-live="polite" aria-atomic="true">{quantity}</span>
      <button type="button" onClick={onIncrease} aria-label="Increase quantity" className="flex h-7 w-7 items-center justify-center rounded border border-stone-300 text-stone-600 transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  )
}
