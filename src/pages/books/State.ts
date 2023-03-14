import { join } from 'path-browserify'
import { ExtensionStore } from '../../components/md/extension-store'
import { useExtensionStore } from '../../composables/extension-store'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { BookConfig, loadBookConfig } from './BookConfig'

export type State = {
  url: string
  path: string
  frontMatter?: string
  extensions: ExtensionStore
  config: BookConfig
  texts: Record<string, string>
}

export type StateOptions = {
  url: string
  path: string
  frontMatter?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { path, frontMatter } = options

  const url = stringTrimEnd(options.url, '/')

  const extensions = useExtensionStore()

  const config = await loadBookConfig({ url })

  const entries = config.contents.map(async (path) => {
    const response = await fetch(new URL(join(config.src, path), url))
    const text = await response.text()
    return [path, text]
  })

  const texts = Object.fromEntries(await Promise.all(entries))

  return {
    url,
    path,
    frontMatter,
    extensions,
    config,
    texts,
  }
}
