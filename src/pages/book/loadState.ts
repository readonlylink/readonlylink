import { join } from 'path-browserify'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { loadBookConfig } from './BookConfig'
import { State } from './State'

export type StateOptions = {
  url: string
  path?: string
  frontMatter?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { path, frontMatter } = options

  const url = stringTrimEnd(options.url, '/')
  const config = await loadBookConfig({ url })

  const texts = Object.fromEntries(
    await Promise.all(
      config.contents.map(async (path) => {
        const response = await fetch(new URL(join(config.src, path), url))
        const text = await response.text()
        return [path, text]
      }),
    ),
  )

  return {
    url,
    path,
    frontMatter,
    config,
    texts,
  }
}