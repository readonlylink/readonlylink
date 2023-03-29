import { documentTitle } from '../../utils/postmark/documentTitle'
import { State } from './State'

export function stateTitle(state: State): string {
  return documentTitle(state.document) || state.url
}
