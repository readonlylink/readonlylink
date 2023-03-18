import { Nodes } from '@xieyuheng/postmark'
import { parseMarkdown } from '../../components/md/parseMarkdown'
import { State } from './State'

export function stateDocuments(state: State): Record<string, Nodes.Document> {
  return Object.fromEntries(
    Object.entries(state.texts).map(([path, text]) => [
      path,
      parseMarkdown(text),
    ]),
  )
}
