export function useCurrentURL() {
  return new URL(window.location.href)
}
