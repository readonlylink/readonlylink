import { Activity } from '../../models/activity/Activity'
import { sortActivities } from '../../models/activity/sortActivities'
import { State } from './State'

export function stateActivitiesForShow(state: State): Array<Activity> {
  const activities = state.activities.filter(
    (activity) =>
      state.currentAuthor === undefined ||
      activity.author.url === state.currentAuthor.url,
  )

  return sortActivities(activities)
}
