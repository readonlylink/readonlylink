import { Document } from '@xieyuheng/x-markdown'
import { BookConfig } from './BookConfig'

export type State = {
  url: string
  path?: string
  frontMatter?: string
  config: BookConfig
  texts: Record<string, string>
  documents: Record<string, Document>
}
