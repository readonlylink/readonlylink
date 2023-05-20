import { Activity } from '../../models/activity/Activity'
import { State } from './State'

export function stateActivitiesForShow(state: State): Array<Activity> {
  let activities = [...state.activities]

  activities = activities.filter(
    (activity) =>
      state.currentAuthor === undefined ||
      activity.author.url === state.currentAuthor.url,
  )

  activities.sort((x, y) =>
    comparisonFromBoolean(
      new Date(x.document.attributes.date) <
        new Date(y.document.attributes.date),
    ),
  )

  return activities
}

function comparisonFromBoolean(p: boolean): 1 | -1 {
  return p ? 1 : -1
}
