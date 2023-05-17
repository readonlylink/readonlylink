import { stateLoadActivities } from '../subscription/stateLoadActivities'
import { State } from './State'

export async function stateLoadActivitiesOnce(state: State): Promise<void> {
  state.isLoadingActivities = true

  await stateLoadActivities(state.subscriptionState)

  state.isLoadingActivities = false
}
