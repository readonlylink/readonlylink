import { reactive } from 'vue'
import { asyncRun } from '../../utils/asyncRun'
import { stateLoadActivities } from '../subscription/stateLoadActivities'
import { State } from './State'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  asyncRun(async () => {
    state.isLoadingActivities = true
    await stateLoadActivities(state.subscriptionState)
    state.isLoadingActivities = false
  })

  return state
}
