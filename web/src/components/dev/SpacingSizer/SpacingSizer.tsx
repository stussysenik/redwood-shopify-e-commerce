import type { ThemeSpacing } from 'src/types/theme'

interface SpacingSizerProps {
  spacing: ThemeSpacing
  onChange: (spacing: ThemeSpacing) => void
}

export function SpacingSizer({ spacing, onChange }: SpacingSizerProps) {
  const radiusValue = parseFloat(spacing.borderRadius)

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-stone-900">Spacing</h3>
      <label className="block">
        <span className="text-sm font-medium text-stone-700">
          Border Radius: {spacing.borderRadius}
        </span>
        <input
          type="range"
          min="0"
          max="2"
          step="0.125"
          value={radiusValue}
          onChange={(e) => onChange({ ...spacing, borderRadius: `${e.target.value}rem` })}
          className="mt-2 w-full accent-amber-600"
        />
        <div className="mt-2 flex items-center gap-3">
          <div
            className="h-16 w-16 border-2 border-stone-300 bg-amber-50"
            style={{ borderRadius: spacing.borderRadius }}
          />
          <div
            className="h-16 w-24 border-2 border-stone-300 bg-amber-50"
            style={{ borderRadius: spacing.borderRadius }}
          />
          <span className="text-xs text-stone-400">Preview</span>
        </div>
      </label>
    </div>
  )
}
