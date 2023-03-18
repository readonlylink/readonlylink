import { Nodes } from '@xieyuheng/postmark'
import { State } from './State'
import { stateDocuments } from './stateDocuments'

export function stateCurrentDocument(state: State): Nodes.Document | undefined {
  if (state.path === undefined) {
    return undefined
  }

  const documents = stateDocuments(state)
  return documents[state.path]
}
