import Postmark, { Nodes } from '@xieyuheng/postmark'

const parser = Postmark.createParser()

export function parseMarkdown(text: string): Nodes.Document {
  return parser.parseDocument(text)
}
