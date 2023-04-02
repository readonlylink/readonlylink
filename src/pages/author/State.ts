import { Document } from '@readonlylink/x-markdown'
import { AuthorConfig } from './AuthorConfig'

export type State = {
  url: string
  config: AuthorConfig
  text: string
  document: Document
}
