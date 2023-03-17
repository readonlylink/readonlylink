import { Nodes } from '@xieyuheng/postmark'
import { ExtensionStore } from '../../components/md/extension-store'
import { AuthorConfig, AuthorConfigSchema } from './AuthorConfig'

type Homepage = {
  text: string
  document: Nodes.Document
}

export type State = {
  url: string
  config: AuthorConfig
  homepage: Homepage
  extensions: ExtensionStore
}

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options

  const config = await loadAuthorConfig(url)

  const extensions = new ExtensionStore()

  const homepageURL = new URL(config.homepage, url)
  const homepage = await loadHomepage(homepageURL, extensions)

  return {
    url,
    config,
    extensions,
    homepage,
  }
}

async function loadAuthorConfig(url: string): Promise<AuthorConfig> {
  const response = await fetch(url)
  const json = await response.json()
  const config = AuthorConfigSchema.validate(json)
  return config
}

async function loadHomepage(
  homepageURL: URL,
  extensions: ExtensionStore,
): Promise<Homepage> {
  const response = await fetch(homepageURL)
  const text = await response.text()
  const document = extensions.parser.parseDocument(text)

  return {
    text,
    document,
  }
}
