import { Document, parseDocument } from '@readonlylink/x-markdown'

export function parseMarkdown(text: string): Document {
  return parseDocument(text)
}
