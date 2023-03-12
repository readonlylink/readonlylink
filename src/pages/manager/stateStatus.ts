import { State } from './State'
import { MessageOptions, stateMessage } from './stateMessage'

export function stateStatusOk(state: State, options?: MessageOptions): void {
  state.status = 'ok'

  if (options) {
    stateMessage(state, options)
  }
}

export function stateStatusRunning(
  state: State,
  options?: MessageOptions,
): void {
  state.status = 'running'

  if (options) {
    stateMessage(state, options)
  }
}

export function stateStatusError(state: State, options?: MessageOptions): void {
  state.status = 'error'

  if (options) {
    stateMessage(state, options)
  }
}
