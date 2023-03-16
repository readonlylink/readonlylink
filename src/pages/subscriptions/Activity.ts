import { Nodes } from '@xieyuheng/postmark'
import { Author } from './State'

export type Activity = {
  author: Author
  path: string
  text: string
  document: Nodes.Document
}
