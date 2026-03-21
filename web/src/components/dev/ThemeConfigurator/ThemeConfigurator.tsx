import { useState } from 'react'
import type { ThemeConfig } from 'src/types/theme'
import { defaultTheme, presetThemes } from 'src/lib/theme-defaults'
import { ColorPicker } from 'src/components/dev/ColorPicker/ColorPicker'
import { TypographyPicker } from 'src/components/dev/TypographyPicker/TypographyPicker'
import { SpacingSizer } from 'src/components/dev/SpacingSizer/SpacingSizer'
import { LivePreview } from 'src/components/dev/LivePreview/LivePreview'
import { ImportExportBar } from 'src/components/dev/ImportExportBar/ImportExportBar'

export function ThemeConfigurator() {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme)

  function handlePresetChange(presetName: string) {
    const preset = presetThemes[presetName]
    if (preset) setTheme(preset)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-stone-900">Design Configurator</h1>
        <p className="mt-2 text-stone-500">Customize the diner theme — colors, typography, and spacing. Export as JSON or CSS variables.</p>
      </div>

      {/* Preset selector */}
      <div className="mb-8">
        <span className="text-sm font-medium text-stone-700">Presets: </span>
        <div className="mt-2 flex flex-wrap gap-2">
          {Object.entries(presetThemes).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => handlePresetChange(key)}
              className="rounded-full border border-stone-200 px-4 py-1.5 text-sm font-medium text-stone-600 transition-colors hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
            >
              <span className="inline-block h-3 w-3 rounded-full mr-2" style={{ backgroundColor: preset.colors.primary }} />
              {preset.meta.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left: controls */}
        <div className="space-y-8">
          <ColorPicker colors={theme.colors} onChange={(colors) => setTheme({ ...theme, colors })} />
          <TypographyPicker typography={theme.typography} onChange={(typography) => setTheme({ ...theme, typography })} />
          <SpacingSizer spacing={theme.spacing} onChange={(spacing) => setTheme({ ...theme, spacing })} />
          <ImportExportBar theme={theme} onImport={setTheme} />
        </div>

        {/* Right: live preview */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <LivePreview theme={theme} />
        </div>
      </div>
    </div>
  )
}
