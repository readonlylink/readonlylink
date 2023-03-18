import { Nodes } from '@xieyuheng/postmark'
import { State } from './State'

export function stateCurrentDocument(state: State): Nodes.Document | undefined {
  if (state.path === undefined) {
    return undefined
  }

  return state.documents[state.path]
}
