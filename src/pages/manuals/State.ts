import { join } from 'path-browserify'
import { ExtensionStore } from '../../components/md/extension-store'
import { useExtensionStore } from '../../composables/extension-store'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { loadManualConfig, ManualConfig } from './ManualConfig'

export type State = {
  url: string
  path?: string
  extensions: ExtensionStore
  config: ManualConfig
  texts: Record<string, string>
}

export type StateOptions = {
  url: string
  path?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')

  const extensions = useExtensionStore()

  const config = await loadManualConfig({ url })

  const path = options.path || config.main

  const texts = Object.fromEntries(
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

  return {
    url,
    path,
    extensions,
    config,
    texts,
  }
}
