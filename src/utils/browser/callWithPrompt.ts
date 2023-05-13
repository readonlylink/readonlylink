type Action = (answer: string) => void

type Options = {
  message: string
  when?: boolean
}

export function callWithPrompt(action: Action, options: Options): void {
  const { message, when } = options

  if (when === true || when === undefined) {
    const answer = window.prompt(message)
    if (answer) {
      action(answer)
    }
  }
}
