import { Nodes } from '@xieyuheng/postmark'

export function documentTitle(document: Nodes.Document): string | undefined {
  if (document.attributes.title) {
    return document.attributes.title
  }

  const firstHeadline = documentFirstHeadline(document)
  if (firstHeadline !== undefined) {
    return firstHeadline.formatBody()
  }

  return undefined
}

function documentFirstHeadline(
  document: Nodes.Document,
): Nodes.Headline | undefined {
  return document.children.find((node) => node instanceof Nodes.Headline) as
    | Nodes.Headline
    | undefined
}
