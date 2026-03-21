import type { ThemeConfig } from 'src/types/theme'

export const defaultTheme: ThemeConfig = {
  colors: {
    primary: '#d97706',
    primaryDark: '#b45309',
    primaryLight: '#fbbf24',
    cream: '#fffbeb',
    bark: '#92400e',
  },
  typography: {
    headingFont: 'Playfair Display',
    bodyFont: 'Inter',
  },
  spacing: {
    borderRadius: '0.375rem',
  },
  meta: {
    name: 'Redwood Diner Default',
    version: '1.0.0',
  },
}

export const presetThemes: Record<string, ThemeConfig> = {
  default: defaultTheme,
  midnight: {
    colors: {
      primary: '#6366f1',
      primaryDark: '#4f46e5',
      primaryLight: '#818cf8',
      cream: '#eef2ff',
      bark: '#3730a3',
    },
    typography: { headingFont: 'Playfair Display', bodyFont: 'Inter' },
    spacing: { borderRadius: '0.5rem' },
    meta: { name: 'Midnight Indigo', version: '1.0.0' },
  },
  forest: {
    colors: {
      primary: '#059669',
      primaryDark: '#047857',
      primaryLight: '#34d399',
      cream: '#ecfdf5',
      bark: '#064e3b',
    },
    typography: { headingFont: 'Playfair Display', bodyFont: 'Inter' },
    spacing: { borderRadius: '0.75rem' },
    meta: { name: 'Forest Green', version: '1.0.0' },
  },
  rose: {
    colors: {
      primary: '#e11d48',
      primaryDark: '#be123c',
      primaryLight: '#fb7185',
      cream: '#fff1f2',
      bark: '#881337',
    },
    typography: { headingFont: 'Playfair Display', bodyFont: 'Inter' },
    spacing: { borderRadius: '1rem' },
    meta: { name: 'Rose Pink', version: '1.0.0' },
  },
}
