import { Nodes } from '@xieyuheng/postmark'
import { State } from './State'

export function stateTitle(state: State): string {
  const document = state.homepage.document

  if (document.attributes.title) {
    return document.attributes.title
  }

  const firstHeadline = documentFirstHeadline(document)
  if (firstHeadline !== undefined) {
    return firstHeadline.formatBody()
  }

  return state.config.name
}

function documentFirstHeadline(
  document: Nodes.Document,
): Nodes.Headline | undefined {
  return document.children.find((node) => node instanceof Nodes.Headline) as
    | Nodes.Headline
    | undefined
}
