import { State } from './State'
import { stateReactivelyUpdateActivities } from './stateReactivelyUpdateActivities'
import { stateReactivelyUpdateAuthors } from './stateReactivelyUpdateAuthors'

export function stateWatch(state: State): void {
  stateReactivelyUpdateAuthors(state)
  stateReactivelyUpdateActivities(state)
}
