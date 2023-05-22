import { reactive } from 'vue'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'
import { stateReactivelyUpdateActivities } from './stateReactivelyUpdateActivities'
import { stateReactivelyUpdateAuthors } from './stateReactivelyUpdateAuthors'
import { stateRefresh } from './stateRefresh'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateAuthors(state)
  stateReactivelyUpdateActivities(state)

  if (!state.isRefreshed) {
    asyncRun(async () => {
      await stateRefresh(state)
    })
  }

  return state
}
