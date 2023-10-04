import { useCurrentURL } from './useCurrentURL'

export function useCurrentOrigin() {
  const url = useCurrentURL()
  return url.origin
}
