import { currentURL } from './currentURL'

export function currentOrigin() {
  const url = currentURL()
  return url.origin
}
