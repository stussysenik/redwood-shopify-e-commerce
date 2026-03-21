export default function FatalErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-amber-50 px-4 text-center">
      <p className="mb-4 text-6xl select-none" aria-hidden="true">🍽️</p>
      <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '2.25rem', fontWeight: 700, color: '#1c1917' }}>
        Something went wrong
      </h1>
      <p style={{ marginTop: '1rem', maxWidth: '28rem', color: '#78716c' }}>
        An unexpected error occurred. Please try refreshing the page.
      </p>
    </div>
  )
}
