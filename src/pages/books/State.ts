import { join } from 'path-browserify'
import { ExtensionStore } from '../../components/md/extension-store'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { BookConfig, loadBookConfig } from './BookConfig'

export type State = {
  url: string
  path?: string
  frontMatter?: string
  extensions: ExtensionStore
  config: BookConfig
  texts: Record<string, string>
}

export type StateOptions = {
  url: string
  path?: string
  frontMatter?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { path, frontMatter } = options

  const url = stringTrimEnd(options.url, '/')
  const extensions = new ExtensionStore()
  const config = await loadBookConfig({ url })
  const texts = await loadTexts(new URL(config.src, url), config.contents)

  return {
    url,
    path,
    frontMatter,
    extensions,
    config,
    texts,
  }
}

export async function loadTexts(
  baseURL: URL,
  paths: Array<string>,
): Promise<Record<string, string>> {
  return Object.fromEntries(
    await Promise.all(
      paths.map(async (path) => {
        const response = await fetch(new URL(path, baseURL))
        const text = await response.text()
        return [path, text]
      }),
    ),
  )
}
