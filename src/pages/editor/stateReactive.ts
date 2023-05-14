import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelySaveRecentlyOpened } from './stateReactivelySaveRecentlyOpened'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelySaveRecentlyOpened(state)

  return state
}
