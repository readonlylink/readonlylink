import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateActivities } from './stateReactivelyUpdateActivities'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateActivities(state)

  return state
}
