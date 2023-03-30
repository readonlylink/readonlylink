import { Nodes, parseDocument } from '@readonlylink/x-markdown'

export function parseMarkdown(text: string): Nodes.Document {
  return parseDocument(text)
}
