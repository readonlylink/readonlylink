import { Document } from '@xieyuheng/x-markdown'
import { AuthorConfig } from './AuthorConfig'

export type State = {
  url: string
  config: AuthorConfig
  text: string
  document: Document
}
