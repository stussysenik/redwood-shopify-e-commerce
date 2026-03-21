import { Link } from '@redwoodjs/router'

interface EmptyStateProps {
  title?: string
  message?: string
  actionLabel?: string
  actionLink?: string
}

export function EmptyState({
  title = 'Your cart is empty',
  message = "Looks like you haven't added anything yet.",
  actionLabel = 'Browse Menu',
  actionLink = '/menu',
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-24 text-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-300" aria-hidden="true">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      <div className="space-y-1">
        <h2 className="font-serif text-2xl font-semibold text-stone-800">{title}</h2>
        <p className="text-stone-500 text-sm max-w-xs">{message}</p>
      </div>
      {actionLink && actionLabel && (
        <Link to={actionLink} className="mt-2 inline-flex items-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
