import { Author } from '../../models/author/Author'

export type State = {
  list: Array<string>
  authors: Array<Author>
  isLoadedFromCache?: boolean
}
