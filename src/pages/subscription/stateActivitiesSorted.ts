import { Activity } from './Activity'
import { State } from './State'

export function stateActivitiesSorted(state: State): Array<Activity> {
  const activities = [...state.activities]

  return activities.sort((x, y) => {
    return x.document.attributes.date < y.document.attributes.date ? 1 : -1
  })
}
