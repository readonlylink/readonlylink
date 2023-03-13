import { Nodes } from '@xieyuheng/postmark'
import { useExtensionStore } from '../../composables/extension-store'
import { State } from './State'

export function stateDocument(state: State): Nodes.Document {
  return useExtensionStore().parser.parseDocument(state.text)
}
