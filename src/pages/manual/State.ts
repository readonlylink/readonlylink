import { Nodes } from '@xieyuheng/postmark'
import { join } from 'path-browserify'
import { ExtensionStore } from '../../components/md/ExtensionStore'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { loadManualConfig, ManualConfig } from './ManualConfig'

export type State = {
  url: string
  path?: string
  extensions: ExtensionStore
  config: ManualConfig
  texts: Record<string, string>
  documents: Record<string, Nodes.Document>
}

export type StateOptions = {
  url: string
  path?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const url = stringTrimEnd(options.url, '/')
  const extensions = new ExtensionStore()
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
    Object.entries(texts).map(([path, text]) => [
      path,
      extensions.parser.parseDocument(text),
    ]),
  )

  return {
    url,
    path,
    extensions,
    config,
    texts,
    documents,
  }
}
