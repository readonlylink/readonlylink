import { reactive } from 'vue'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  asyncRun(async () => {
    state.isLoadingActivities = true
    state.subscriptionState.activities = await loadActivitiesFromAuthors(
      state.subscriptionState.authors,
    )
    state.isLoadingActivities = false
  })

  return state
}
