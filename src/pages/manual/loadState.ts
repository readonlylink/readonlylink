import { join } from 'path-browserify'
import { parseMarkdown } from '../../components/md/parseMarkdown'
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
    Object.entries(texts).map(([path, text]) => [path, parseMarkdown(text)]),
  )

  return {
    url,
    path,
    config,
    texts,
    documents,
  }
}
