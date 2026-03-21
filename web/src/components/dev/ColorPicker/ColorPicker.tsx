import type { ThemeColors } from 'src/types/theme'

interface ColorPickerProps {
  colors: ThemeColors
  onChange: (colors: ThemeColors) => void
}

const COLOR_FIELDS: { key: keyof ThemeColors; label: string }[] = [
  { key: 'primary', label: 'Primary' },
  { key: 'primaryDark', label: 'Primary Dark' },
  { key: 'primaryLight', label: 'Primary Light' },
  { key: 'cream', label: 'Cream / Background' },
  { key: 'bark', label: 'Bark / Deep Accent' },
]

export function ColorPicker({ colors, onChange }: ColorPickerProps) {
  function handleChange(key: keyof ThemeColors, value: string) {
    onChange({ ...colors, [key]: value })
  }

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-stone-900">Colors</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {COLOR_FIELDS.map(({ key, label }) => (
          <label key={key} className="flex items-center gap-3">
            <input
              type="color"
              value={colors[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="h-10 w-10 cursor-pointer rounded border border-stone-200"
            />
            <div>
              <span className="text-sm font-medium text-stone-700">{label}</span>
              <span className="block text-xs text-stone-400 font-mono">{colors[key]}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
