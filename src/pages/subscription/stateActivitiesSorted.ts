import { Activity } from './Activity'
import { State } from './State'

export function stateActivitiesSorted(state: State): Array<Activity> {
  const activities = [...state.activities]

  return activities.sort((x, y) =>
    comparisonFromBoolean(
      new Date(x.document.attributes.date) <
        new Date(y.document.attributes.date),
    ),
  )
}

function comparisonFromBoolean(p: boolean): 1 | -1 {
  return p ? 1 : -1
}
