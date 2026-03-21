import type { ThemeConfig } from 'src/types/theme'

interface LivePreviewProps {
  theme: ThemeConfig
}

export function LivePreview({ theme }: LivePreviewProps) {
  const { colors, typography, spacing } = theme

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-stone-900">Live Preview</h3>
      <div
        className="rounded-xl border border-stone-200 overflow-hidden"
        style={{ '--preview-primary': colors.primary, '--preview-cream': colors.cream } as React.CSSProperties}
      >
        {/* Mini header */}
        <div className="px-4 py-3 border-b" style={{ backgroundColor: 'white' }}>
          <span style={{ fontFamily: `"${typography.headingFont}", serif`, fontWeight: 600, color: '#1c1917' }}>
            Redwood Diner
          </span>
        </div>

        {/* Mini hero */}
        <div className="px-4 py-8 text-center" style={{ backgroundColor: colors.cream }}>
          <h4 style={{ fontFamily: `"${typography.headingFont}", serif`, fontSize: '1.25rem', fontWeight: 700, color: '#1c1917' }}>
            Welcome to Redwood Diner
          </h4>
          <p className="mt-2 text-sm" style={{ fontFamily: `"${typography.bodyFont}", sans-serif`, color: '#57534e' }}>
            Classic comfort food, made fresh daily
          </p>
          <button
            className="mt-4 px-5 py-2 text-sm font-semibold text-white"
            style={{ backgroundColor: colors.primary, borderRadius: spacing.borderRadius }}
          >
            View Our Menu
          </button>
        </div>

        {/* Mini card */}
        <div className="p-4" style={{ backgroundColor: '#fafaf9' }}>
          <div className="bg-white overflow-hidden shadow-sm" style={{ borderRadius: spacing.borderRadius }}>
            <div className="h-24 flex items-center justify-center text-3xl" style={{ backgroundColor: colors.cream }}>
              🍔
            </div>
            <div className="p-3">
              <p style={{ fontFamily: `"${typography.headingFont}", serif`, fontWeight: 600, fontSize: '0.875rem' }}>
                Classic Cheeseburger
              </p>
              <p className="mt-1" style={{ fontFamily: `"${typography.bodyFont}", sans-serif`, fontSize: '0.75rem', color: '#78716c' }}>
                Hand-formed 6 oz beef patty
              </p>
              <span className="mt-2 inline-block text-sm font-semibold" style={{ color: colors.primary }}>
                $12.99
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
