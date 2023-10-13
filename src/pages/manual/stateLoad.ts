import { parseDocument } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { useHistory } from '../../models/history/useHistory'
import { loadManualConfig } from '../../models/manual/loadManualConfig'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { State } from './State'

export type StateOptions = {
  url: string
  path?: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')
  const config = await loadManualConfig({ url })
  const path = options.path || config.main

  const texts: Record<string, string> = Object.fromEntries(
    await promiseAllFulfilled(
      Object.values(config.sections).flatMap((paths) =>
        paths.map(async (path) => {
          const response = await fetch(new URL(join(config.src, path), url))
          const text = await response.text()
          return [path, text]
        }),
      ),
    ),
  )

  const documents = Object.fromEntries(
    Object.entries(texts).map(([path, text]) => [path, parseDocument(text)]),
  )

  const history = await useHistory()
  history.record[url] = { time: Date.now(), url }

  return {
    url,
    path,
    config,
    texts,
    documents,
  }
}
