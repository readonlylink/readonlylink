import { documentTitle } from '../../utils/postmark/documentTitle'
import { State } from './State'
import { stateDocument } from './stateDocument'

export function stateTitle(state: State): string {
  const document = stateDocument(state)
  return documentTitle(document) || state.url
}
