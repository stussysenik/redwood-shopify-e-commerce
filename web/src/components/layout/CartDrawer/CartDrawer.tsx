import { useEffect } from 'react'
import { useCart } from 'src/hooks/use-cart'
import { CartMain } from 'src/components/cart/CartMain/CartMain'

export function CartDrawer() {
  const { isCartOpen, closeCart } = useCart()

  useEffect(() => {
    if (!isCartOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isCartOpen, closeCart])

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isCartOpen])

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300',
          isCartOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={[
          'fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl',
          'transition-transform duration-300 ease-in-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-4">
          <h2 className="font-serif text-xl font-semibold text-stone-900">Your Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Close cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <CartMain layout="aside" />
        </div>
      </div>
    </>
  )
}
