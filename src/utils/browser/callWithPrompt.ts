type Action = (answer: string) => void

type Options = {
  message: string
  when?: boolean
  action: Action
}

export function callWithPrompt(options: Options): void {
  const { message, when, action } = options

  if (when === true || when === undefined) {
    const answer = window.prompt(message)
    if (answer) {
      action(answer)
    }
  }
}
