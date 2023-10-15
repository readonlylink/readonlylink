import { State } from './State'
import { stateListenMessage } from './stateListenMessage'

export function stateListen(state: State): void {
  stateListenMessage(state)
}
