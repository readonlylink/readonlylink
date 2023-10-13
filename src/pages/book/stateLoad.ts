import { parseDocument } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { loadBookConfig } from '../../models/book/loadBookConfig'
import { useHistory } from '../../models/history/useHistory'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { State } from './State'

export type StateOptions = {
  url: string
  path?: string
  frontMatter?: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { path, frontMatter } = options

  const url = stringTrimEnd(options.url, '/')
  const config = await loadBookConfig({ url })

  const texts: Record<string, string> = Object.fromEntries(
    await promiseAllFulfilled(
      config.contents.map(async (path) => {
        const response = await fetch(new URL(join(config.src, path), url))
        const text = await response.text()
        return [path, text]
      }),
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
    frontMatter,
    config,
    texts,
    documents,
  }
}
