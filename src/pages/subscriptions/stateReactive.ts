import { reactive } from 'vue'
import { State } from './State'
import { stateReactivelyUpdateActivities } from './stateReactivelyUpdateActivities'
import { stateReactivelyUpdateAuthors } from './stateReactivelyUpdateAuthors'
import { stateReactivelyUpdateList } from './stateReactivelyUpdateList'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  stateReactivelyUpdateList(state)
  stateReactivelyUpdateAuthors(state)
  stateReactivelyUpdateActivities(state)

  return state
}
