import { Nodes } from '@xieyuheng/postmark'
import { BookConfig } from './BookConfig'

export type State = {
  url: string
  path?: string
  frontMatter?: string
  config: BookConfig
  texts: Record<string, string>
  documents: Record<string, Nodes.Document>
}
