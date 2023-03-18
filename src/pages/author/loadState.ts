import { parseMarkdown } from '../../components/md/parseMarkdown'
import { Homepage, State } from './State'
import { loadAuthorConfig } from './loadAuthorConfig'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options

  const config = await loadAuthorConfig(url)
  const homepageURL = new URL(config.homepage, url)
  const homepage = await loadHomepage(homepageURL)

  return {
    url,
    config,
    homepage,
  }
}

async function loadHomepage(homepageURL: URL): Promise<Homepage> {
  const response = await fetch(homepageURL)
  const text = await response.text()
  const document = parseMarkdown(text)

  return {
    text,
    document,
  }
}
