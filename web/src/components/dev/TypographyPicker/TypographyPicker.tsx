import type { ThemeTypography } from 'src/types/theme'

interface TypographyPickerProps {
  typography: ThemeTypography
  onChange: (typography: ThemeTypography) => void
}

const FONT_OPTIONS = [
  'Playfair Display',
  'Inter',
  'Georgia',
  'Merriweather',
  'Lora',
  'Roboto',
  'Open Sans',
  'Montserrat',
  'Poppins',
  'Raleway',
]

export function TypographyPicker({ typography, onChange }: TypographyPickerProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-stone-900">Typography</h3>
      <div className="space-y-3">
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Heading Font</span>
          <select
            value={typography.headingFont}
            onChange={(e) => onChange({ ...typography, headingFont: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-amber-500"
          >
            {FONT_OPTIONS.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-stone-400" style={{ fontFamily: typography.headingFont }}>
            Preview: The quick brown fox jumps over the lazy dog
          </p>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-stone-700">Body Font</span>
          <select
            value={typography.bodyFont}
            onChange={(e) => onChange({ ...typography, bodyFont: e.target.value })}
            className="mt-1 block w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-amber-500 focus:ring-amber-500"
          >
            {FONT_OPTIONS.map((font) => (
              <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-stone-400" style={{ fontFamily: typography.bodyFont }}>
            Preview: The quick brown fox jumps over the lazy dog
          </p>
        </label>
      </div>
    </div>
  )
}
