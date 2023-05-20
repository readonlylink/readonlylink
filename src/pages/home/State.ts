import { Activity } from '../../models/activity/Activity'
import { Author } from '../../models/author/Author'

export type State = {
  list: Array<string>
  authors: Array<Author>
  activities: Array<Activity>
}
