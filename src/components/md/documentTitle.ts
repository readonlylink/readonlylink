import { Document, Nodes, formatNode } from '@xieyuheng/x-markdown'

export function documentTitle(document: Document): string | undefined {
  if (document.attributes.title) {
    return document.attributes.title
  }

  const firstHeadline = documentFirstHeadline(document)
  if (firstHeadline !== undefined) {
    return formatNode(firstHeadline)
  }

  return undefined
}

function documentFirstHeadline(document: Document): Nodes.Headline | undefined {
  return document.children.find((node) => node.kind === 'Headline') as
    | Nodes.Headline
    | undefined
}
