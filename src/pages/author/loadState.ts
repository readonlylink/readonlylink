import { parseDocument } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { loadGlobalHistory } from '../../reactives/loadGlobalHistory'
import { State } from './State'
import { loadAuthorConfig } from './loadAuthorConfig'

export type StateOptions = {
  url: string
  path?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url, path } = options

  const config = await loadAuthorConfig(url)

  const homepageURL = new URL(join(config.src || '', config.homepage), url)
  const response = await fetch(homepageURL)
  const text = await response.text()
  const homepageDocument = parseDocument(text)

  const history = await loadGlobalHistory()
  history.record[url] = { time: Date.now(), url }

  const documents = {
    [config.homepage]: homepageDocument,
  }

  const texts: Record<string, string> = Object.fromEntries(
    await Promise.all(
      Object.values(config.tabs || {}).map(async (path) => {
        const response = await fetch(new URL(join(config.src || '', path), url))
        const text = await response.text()
        return [path, text]
      }),
    ),
  )

  for (const [path, text] of Object.entries(texts)) {
    documents[path] = parseDocument(text)
  }

  return {
    url,
    path,
    config,
    text,
    homepageDocument,
    documents,
  }
}
