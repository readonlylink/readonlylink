import { useMediaQuery } from '@vueuse/core'

// https://tailwindcss.com/docs/responsive-design

const breakpoints: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export function useBreakpoint(name: string) {
  return useMediaQuery(`(min-width: ${breakpoints[name]})`)
}
