import { reactive } from 'vue'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  if (state.isLoadedFromCache) {
    asyncRun(async () => {
      await stateRefresh(state)
    })
  }

  return state
}
