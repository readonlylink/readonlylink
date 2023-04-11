import { parseDocument } from '@xieyuheng/x-markdown'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { State } from './State'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')
  const response = await fetch(url)
  const text = await response.text()
  const document = parseDocument(text)

  return {
    url,
    text,
    document,
  }
}
