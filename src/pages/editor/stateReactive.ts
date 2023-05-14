import { reactive } from 'vue'
import { State } from './State'
// import { stateReactivelyStoreRecentlyOpened } from './stateReactivelyStoreRecentlyOpened'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  // stateReactivelyStoreRecentlyOpened(state)

  return state
}
