import { Nodes } from '@xieyuheng/postmark'
import { State } from './State'
import { stateDocument } from './stateDocument'

export function stateTitle(state: State): string {
  const document = stateDocument(state)

  if (document.attributes.title) {
    return document.attributes.title
  }

  const firstHeadline = documentFirstHeadline(document)
  if (firstHeadline !== undefined) {
    return firstHeadline.formatBody()
  }

  return state.url
}

function documentFirstHeadline(
  document: Nodes.Document,
): Nodes.Headline | undefined {
  return document.children.find((node) => node instanceof Nodes.Headline) as
    | Nodes.Headline
    | undefined
}
