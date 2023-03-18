import { ExtensionStore } from '../../components/md/ExtensionStore'
import { stringTrimEnd } from '../../utils/stringTrimEnd'

export type State = {
  url: string
  text: string
  extensions: ExtensionStore
}

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')
  const response = await fetch(url)
  const text = await response.text()
  const extensions = new ExtensionStore()

  return {
    url,
    text,
    extensions,
  }
}
