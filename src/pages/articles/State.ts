import { stringTrimEnd } from '../../utils/stringTrimEnd'

export type State = {
  url: string
  text: string
}

export type Options = {
  url: string
}

export async function loadState(options: Options): Promise<State> {
  const url = stringTrimEnd(String(options.url), '/')
  const response = await fetch(url)
  const text = await response.text()

  return {
    url,
    text,
  }
}
