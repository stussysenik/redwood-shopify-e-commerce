export interface ThemeColors {
  primary: string
  primaryDark: string
  primaryLight: string
  cream: string
  bark: string
}

export interface ThemeTypography {
  headingFont: string
  bodyFont: string
}

export interface ThemeSpacing {
  borderRadius: string
}

export interface ThemeConfig {
  colors: ThemeColors
  typography: ThemeTypography
  spacing: ThemeSpacing
  meta: {
    name: string
    version: string
  }
}
