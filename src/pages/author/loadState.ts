import { parseDocument } from '@xieyuheng/x-markdown'
import { State } from './State'
import { loadAuthorConfig } from './loadAuthorConfig'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options

  const config = await loadAuthorConfig(url)

  const homepageURL = new URL(config.homepage, url)
  const response = await fetch(homepageURL)
  const text = await response.text()
  const document = parseDocument(text)

  return {
    url,
    config,
    text,
    document,
  }
}
