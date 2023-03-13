import { stringTrimEnd } from '../../utils/stringTrimEnd'

export type State = {
  url: string
  text: string
}

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(String(options.url), '/')
  const response = await fetch(url)
  const text = await response.text()

  return {
    url,
    text,
  }
}
