import { Document } from '@xieyuheng/x-markdown'
import { AuthorConfig } from './AuthorConfig'

export type State = {
  url: string
  path?: string
  config: AuthorConfig
  text: string
  homepageDocument: Document
  documents: Record<string, Document>
}
