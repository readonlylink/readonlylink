import { loadState as loadSubscriptionState } from '../subscription/loadState'
import { stateLoadActivities } from '../subscription/stateLoadActivities'
import { State } from './State'

export type StateOptions = {
  list: Array<string>
}

export async function loadState(options: StateOptions): Promise<State> {
  const { list } = options

  const subscriptionState = await loadSubscriptionState({ list })
  await stateLoadActivities(subscriptionState)

  return {
    list,
    subscriptionState,
  }
}
