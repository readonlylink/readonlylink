import { Nodes } from '@readonlylink/x-markdown'
import { Author } from '../author/Author'

export type Activity = {
  author: Author
  path: string
  text: string
  document: Nodes.Document
}
