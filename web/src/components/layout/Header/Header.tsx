import { useState, useEffect } from 'react'
import { Link, useLocation } from '@redwoodjs/router'
import { useCart } from 'src/hooks/use-cart'

export function Header() {
  const { cart, toggleCart } = useCart()
  const { totalQuantity } = cart
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileNavOpen) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileNavOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileNavOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-xl font-semibold tracking-tight text-stone-900 transition-colors hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          aria-label="Redwood Diner — Home"
        >
          Redwood Diner
        </Link>

        <nav className="hidden items-center gap-8 sm:flex" aria-label="Main navigation">
          <Link
            to="/menu"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            Menu
          </Link>
          <Link
            to="/cart"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            Cart
          </Link>
          {process.env.NODE_ENV === 'development' && (
            <Link
              to="/dev/configurator"
              className="flex h-8 w-8 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Design Configurator"
              title="Design Configurator"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={`Open cart${totalQuantity > 0 ? `, ${totalQuantity} item${totalQuantity === 1 ? '' : 's'}` : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {totalQuantity > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-600 text-[10px] font-semibold leading-none text-white" aria-hidden="true">
                {totalQuantity > 99 ? '99+' : totalQuantity}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-amber-50 hover:text-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 sm:hidden"
          >
            {mobileNavOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileNavOpen && (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-t border-stone-100 bg-white/98 px-4 py-3 sm:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/menu" className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-stone-700 transition-colors hover:bg-amber-50 hover:text-amber-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500">
                Cart
                {totalQuantity > 0 && (
                  <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1 text-[10px] font-semibold text-white">
                    {totalQuantity > 99 ? '99+' : totalQuantity}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
