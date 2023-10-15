import { parseDocument } from '@xieyuheng/x-markdown'
import { useHistory } from '../../models/history/useHistory'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { State } from './State'

export type StateOptions = {
  url: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')
  const response = await fetch(url)
  const contentType = response.headers.get('content-type') || ''
  const text = await response.text()
  const document = parseDocument(text)

  const history = await useHistory()
  history.record[url] = { time: Date.now(), url }

  return {
    url,
    text,
    contentType,
    document,
  }
}
