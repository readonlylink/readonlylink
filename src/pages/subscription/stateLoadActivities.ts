import { loadAuthorActivities } from '../../models/activity/loadAuthorActivities'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export async function stateLoadActivities(state: State): Promise<void> {
  state.activities = (
    await promiseAllFulfilled(state.authors.map(loadAuthorActivities))
  ).flatMap((activities) => activities)
}
