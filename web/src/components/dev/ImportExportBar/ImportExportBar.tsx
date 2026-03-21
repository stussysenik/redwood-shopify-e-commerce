import { useState } from 'react'
import type { ThemeConfig } from 'src/types/theme'

interface ImportExportBarProps {
  theme: ThemeConfig
  onImport: (theme: ThemeConfig) => void
}

export function ImportExportBar({ theme, onImport }: ImportExportBarProps) {
  const [importText, setImportText] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)
  const [importError, setImportError] = useState('')

  function handleExportJSON() {
    const json = JSON.stringify(theme, null, 2)
    navigator.clipboard.writeText(json).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    })
  }

  function handleCopyCSS() {
    const css = `:root {
  --color-diner-gold: ${theme.colors.primary};
  --color-diner-gold-dark: ${theme.colors.primaryDark};
  --color-diner-gold-light: ${theme.colors.primaryLight};
  --color-diner-cream: ${theme.colors.cream};
  --color-diner-bark: ${theme.colors.bark};
  --font-family-serif: "${theme.typography.headingFont}", Georgia, serif;
  --font-family-sans: "${theme.typography.bodyFont}", system-ui, sans-serif;
  --radius-diner: ${theme.spacing.borderRadius};
}`
    navigator.clipboard.writeText(css).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    })
  }

  function handleImport() {
    try {
      const parsed = JSON.parse(importText) as ThemeConfig
      if (!parsed.colors || !parsed.typography || !parsed.spacing) {
        throw new Error('Invalid theme format')
      }
      onImport(parsed)
      setImportText('')
      setImportError('')
    } catch {
      setImportError('Invalid JSON — check format and try again')
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-stone-900">Import / Export</h3>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleExportJSON}
          className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
        >
          {copySuccess ? 'Copied!' : 'Copy JSON'}
        </button>
        <button
          onClick={handleCopyCSS}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
        >
          Copy CSS Variables
        </button>
      </div>

      <div className="space-y-2">
        <textarea
          value={importText}
          onChange={(e) => setImportText(e.target.value)}
          placeholder="Paste theme JSON here to import..."
          rows={4}
          className="w-full rounded-lg border border-stone-300 p-3 text-sm font-mono focus:border-amber-500 focus:ring-amber-500"
        />
        {importError && <p className="text-xs text-red-500">{importError}</p>}
        <button
          onClick={handleImport}
          disabled={!importText.trim()}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Import Theme
        </button>
      </div>
    </div>
  )
}
