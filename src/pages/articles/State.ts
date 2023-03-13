import { ExtensionStore } from '../../components/md/extension-store'
import { useExtensionStore } from '../../composables/extension-store'
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
  const url = stringTrimEnd(String(options.url), '/')
  const response = await fetch(url)
  const text = await response.text()
  const extensions = useExtensionStore()

  return {
    url,
    text,
    extensions,
  }
}
