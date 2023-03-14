import { Nodes } from '@xieyuheng/postmark'
import { State } from './State'

export function stateDocuments(state: State): Record<string, Nodes.Document> {
  return Object.fromEntries(
    Object.entries(state.texts).map(([path, text]) => [
      path,
      state.extensions.parser.parseDocument(text),
    ]),
  )
}
