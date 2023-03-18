import { Author } from '../author/Author'
import { Activity } from './Activity'

export type State = {
  kind?: string
  list: Array<string>
  authors: Array<Author>
  currentAuthor?: Author
  activities: Array<Activity>
}
