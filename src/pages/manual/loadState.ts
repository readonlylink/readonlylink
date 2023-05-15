import { parseDocument } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { loadGlobalHistory } from '../../reactives/loadGlobalHistory'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { loadManualConfig } from './ManualConfig'
import { State } from './State'

export type StateOptions = {
  url: string
  path?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')
  const config = await loadManualConfig({ url })
  const path = options.path || config.main

  const texts: Record<string, string> = Object.fromEntries(
    await Promise.all(
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

  const history = await loadGlobalHistory()
  history.record[url] = { time: Date.now(), url }

  return {
    url,
    path,
    config,
    texts,
    documents,
  }
}
