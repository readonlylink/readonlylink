import { Theme } from './Theme'
import { globalTheme } from './globalTheme'
import { initialThemeName } from './initialThemeName'

let initialized = false

export function useGlobalTheme(): Theme {
  if (initialized) return globalTheme

  globalTheme.name = initialThemeName()
  initialized = true
  return globalTheme
}
