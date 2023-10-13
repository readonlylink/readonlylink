import { State } from './State'
import { stateReactivelySaveRecentlyOpened } from './stateReactivelySaveRecentlyOpened'

export function stateWatch(state: State): void {
  stateReactivelySaveRecentlyOpened(state)
}
