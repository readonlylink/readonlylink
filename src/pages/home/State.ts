import { Activity } from '../../models/activity/Activity'

export type State = {
  list: Array<string>
  activities: Array<Activity>
  isLoadedFromCache?: boolean
}
