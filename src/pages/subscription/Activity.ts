import { Document } from '@xieyuheng/x-markdown'
import { Author } from '../../models/author/Author'

export type Activity = {
  author: Author
  path: string
  text: string
  document: Document
}
