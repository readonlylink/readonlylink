import { reactive } from 'vue'
import { State } from './State'

export function stateReactive(state: State): State {
  state = reactive(state)

  //

  return state
}
