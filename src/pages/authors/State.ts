import { AuthorConfig, AuthorConfigSchema } from './AuthorConfig'

export type State = {
  url: string
  config: AuthorConfig
}

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options

  const config = await loadAuthorConfig(url)

  return {
    url,
    config,
  }
}

async function loadAuthorConfig(url: string): Promise<AuthorConfig> {
  const response = await fetch(url)
  const json = await response.json()
  const config = AuthorConfigSchema.validate(json)
  return config
}
