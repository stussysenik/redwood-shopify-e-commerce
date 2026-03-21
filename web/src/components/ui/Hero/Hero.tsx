import { Link } from '@redwoodjs/router'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

export function Hero({
  title = 'Welcome to Redwood Diner',
  subtitle = 'Classic comfort food, made fresh daily',
  ctaText = 'View Our Menu',
  ctaLink = '/menu',
}: HeroProps) {
  return (
    <section aria-label="Hero banner" className="bg-gradient-to-b from-amber-50 via-amber-50/60 to-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4 text-3xl select-none" aria-hidden="true">🍽️</p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-stone-900 md:text-5xl lg:text-6xl">{title}</h1>
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="block h-px w-16 bg-amber-400" />
          <span className="text-amber-500 text-lg select-none" aria-hidden="true">✦</span>
          <span className="block h-px w-16 bg-amber-400" />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">{subtitle}</p>
        <div className="mt-10">
          <Link to={ctaLink} className="inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}
