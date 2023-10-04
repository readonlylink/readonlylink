import { currentURL } from './currentURL'

export function currentPathname() {
  const url = currentURL()
  return url.pathname
}
