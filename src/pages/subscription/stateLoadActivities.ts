import { loadActivitiesFromAuthor } from '../../models/activity/loadActivitiesFromAuthor'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export async function stateLoadActivities(state: State): Promise<void> {
  state.activities = (
    await promiseAllFulfilled(state.authors.map(loadActivitiesFromAuthor))
  ).flatMap((activities) => activities)
}
