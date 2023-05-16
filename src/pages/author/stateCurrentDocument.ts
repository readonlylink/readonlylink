import { Document } from '@xieyuheng/x-markdown'
import { State } from './State'

export function stateCurrentDocument(state: State): Document | undefined {
  if (state.path === undefined) {
    return state.homepageDocument
  }

  return state.documents[state.path]
}
