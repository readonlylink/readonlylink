import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { State } from './State'

export async function stateLoadActivities(state: State): Promise<void> {
  state.activities = await loadActivitiesFromAuthors(state.authors)
}
