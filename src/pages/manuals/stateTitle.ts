import { State } from './State'
import { stateCurrentDocument } from './stateCurrentDocument'

export function stateTitle(state: State): string {
  const document = stateCurrentDocument(state)

  if (document === undefined) {
    return state.config.title
  }

  return [document.attributes.title, state.config.title].join(' | ')
}
