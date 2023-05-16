import { documentTitle } from '../../components/md/documentTitle'
import { State } from './State'

export function stateTitle(state: State): string {
  const document = state.homepageDocument
  return documentTitle(document) || state.config.name
}
