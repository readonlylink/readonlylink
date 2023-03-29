import { isExternalLink } from './isExternalLink'
import { State } from './State'

export function stateResolveLink(state: State, link: string): string {
  if (isExternalLink(link)) {
    return link
  }

  return new URL(link, state.url).href
}
