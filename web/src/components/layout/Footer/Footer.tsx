import { Link } from '@redwoodjs/router'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Link to="/" className="font-serif text-lg font-semibold text-stone-900 transition-colors hover:text-amber-700">
            Redwood Diner
          </Link>
          <p className="text-sm italic text-stone-500">Made with love, served with a smile.</p>
          <p className="text-xs text-stone-400">&copy; {currentYear} Redwood Diner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
