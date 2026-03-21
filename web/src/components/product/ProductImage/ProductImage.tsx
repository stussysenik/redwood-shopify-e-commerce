interface ProductImageProps {
  image?: { url: string; altText: string }
  title: string
  emoji?: string
}

function UtensilsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-amber-300" aria-hidden="true">
      <path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2" />
      <line x1="5" y1="11" x2="5" y2="22" />
      <line x1="3" y1="2" x2="3" y2="7" />
      <line x1="7" y1="2" x2="7" y2="7" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}

export function ProductImage({ image, title, emoji }: ProductImageProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 shadow-sm">
      {image ? (
        <img src={image.url} alt={image.altText || title} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3" aria-label={title}>
          {emoji ? (
            <span className="text-7xl select-none">{emoji}</span>
          ) : (
            <UtensilsIcon />
          )}
          <span className="text-sm font-medium tracking-wide text-amber-400/80 uppercase select-none">{title}</span>
        </div>
      )}
    </div>
  )
}
