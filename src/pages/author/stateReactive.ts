import { reactive } from 'vue'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  asyncRun(async () => {
    state.isLoadingActivities = true
    state.activities = await loadActivitiesFromAuthors([state.author])
    state.isLoadingActivities = false
  })

  return state
}
