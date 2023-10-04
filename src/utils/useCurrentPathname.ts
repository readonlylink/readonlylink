import { useCurrentURL } from './useCurrentURL'

export function useCurrentPathname() {
  const url = useCurrentURL()
  return url.pathname
}
