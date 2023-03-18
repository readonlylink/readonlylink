import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateActivities } from './stateReactivelyUpdateActivities'
import { stateReactivelyUpdateAuthors } from './stateReactivelyUpdateAuthors'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateAuthors(state)
  stateReactivelyUpdateActivities(state)

  return state
}
