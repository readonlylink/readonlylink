import { Nodes } from '@xieyuheng/postmark'
import { Author } from '../authors/Author'

export type Activity = {
  author: Author
  path: string
  text: string
  document: Nodes.Document
}
