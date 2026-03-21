import { Link } from '@redwoodjs/router'

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50 px-4 text-center">
      <p className="mb-4 text-6xl select-none" aria-hidden="true">🍽️</p>
      <h1 className="font-serif text-4xl font-bold text-stone-900">Page not found</h1>
      <p className="mt-4 max-w-md text-base text-stone-500">Sorry, we couldn't find what you were looking for.</p>
      <p className="mt-2 text-sm text-stone-400">That menu item or page doesn't exist at this address.</p>
      <div className="mt-8 flex gap-4">
        <Link to="/" className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
          Go Home
        </Link>
        <Link to="/menu" className="rounded-full border border-stone-300 bg-white px-6 py-2.5 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
          See the Menu
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
