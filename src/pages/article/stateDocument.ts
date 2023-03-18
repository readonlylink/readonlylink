import { Nodes } from '@xieyuheng/postmark'
import { parseMarkdown } from '../../components/md/parseMarkdown'
import { State } from './State'

export function stateDocument(state: State): Nodes.Document {
  return parseMarkdown(state.text)
}
