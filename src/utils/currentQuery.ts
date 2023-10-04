import qs from 'qs'

export function currentQuery() {
  const url = new URL(window.location.href)
  const query = qs.parse(url.search, { ignoreQueryPrefix: true })
  return query
}
