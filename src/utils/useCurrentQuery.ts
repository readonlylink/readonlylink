import qs from 'qs'

export function useCurrentQuery() {
  const url = new URL(window.location.href)
  const query = qs.parse(url.search, { ignoreQueryPrefix: true })
  return query
}
