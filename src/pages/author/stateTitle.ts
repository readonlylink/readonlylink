import { documentTitle } from '../../utils/postmark/documentTitle'
import { State } from './State'

export function stateTitle(state: State): string {
  const document = state.document
  return documentTitle(document) || state.config.name
}
