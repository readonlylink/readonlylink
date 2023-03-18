import { Nodes } from '@xieyuheng/postmark'
import { AuthorConfig } from './AuthorConfig'

export type Homepage = {
  text: string
  document: Nodes.Document
}

export type State = {
  url: string
  config: AuthorConfig
  homepage: Homepage
}
