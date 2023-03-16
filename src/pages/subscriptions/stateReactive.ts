import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateActivities } from './stateReactivelyUpdateActivities'
import { stateReactivelyUpdateList } from './stateReactivelyUpdateList'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateList(state)
  stateReactivelyUpdateActivities(state)

  return state
}
