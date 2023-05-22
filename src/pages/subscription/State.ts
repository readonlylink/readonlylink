import { Activity } from '../../models/activity/Activity'
import { Author } from '../../models/author/Author'

export type State = {
  kind?: string
  list: Array<string>
  authors: Array<Author>
  currentAuthor?: Author
  activities: Array<Activity>
  isLoadedFromCache?: boolean
}
