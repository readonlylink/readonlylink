import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateList } from './stateReactivelyUpdateList'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateList(state)

  return state
}
