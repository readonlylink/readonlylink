import { reactive } from 'vue'
import { State } from './State'
import { stateLoadActivitiesOnce } from './stateLoadActivitiesOnce'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateLoadActivitiesOnce(state)

  return state
}
