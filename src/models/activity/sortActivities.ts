import { Activity } from '../../models/activity/Activity'

export function sortActivities(activities: Array<Activity>): Array<Activity> {
  activities = [...activities]

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
