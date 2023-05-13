type Action = () => void

type Options = {
  message: string
  when?: boolean
  action: Action
}

export function callWithConfirm(options: Options): void {
  const { message, when, action } = options

  if (when === true || when === undefined) {
    if (window.confirm(message)) {
      action()
    }
  } else {
    action()
  }
}
