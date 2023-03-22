import { Nodes } from '@xieyuheng/postmark'
import { AuthorConfig } from './AuthorConfig'

export type State = {
  url: string
  config: AuthorConfig
  text: string
  document: Nodes.Document
}
