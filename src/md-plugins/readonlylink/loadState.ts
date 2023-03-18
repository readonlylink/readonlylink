import { parseMarkdown } from '../../components/md/parseMarkdown'
import { State } from './State'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options

  const response = await fetch(url)
  const text = await response.text()
  const document = parseMarkdown(text)

  return {
    url,
    text,
    document,
  }
}
