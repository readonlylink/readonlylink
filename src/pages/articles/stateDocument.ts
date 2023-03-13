import { Nodes } from '@xieyuheng/postmark'
import { State } from './State'

export function stateDocument(state: State): Nodes.Document {
  return state.extensions.parser.parseDocument(state.text)
}
