import { State } from './State'

export type MessageOptions = {
  who?: string
  message?: string
  data?: any
}

export function stateMessage(state: State, options: MessageOptions): void {
  state.message = formatMessage(options)
}

function formatMessage(options: MessageOptions): string {
  let message = ''

  if (options.who) {
    message += `[${options.who}]`
  }

  if (options.message) {
    message += ` `
    message += options.message
  }

  if (options.data) {
    message += ` `
    message += JSON.stringify(options.data)
  }

  return message
}
