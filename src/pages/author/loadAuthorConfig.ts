import {
  AuthorConfig,
  AuthorConfigSchema,
} from '../../models/author/AuthorConfig'

export async function loadAuthorConfig(url: string): Promise<AuthorConfig> {
  const response = await fetch(url)
  const json = await response.json()
  const config = AuthorConfigSchema.validate(json)
  return config
}
