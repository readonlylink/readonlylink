import {
  AuthorConfig,
  AuthorConfigSchema,
} from '../../models/author/AuthorConfig'

export async function loadAuthorConfig(
  url: string | URL,
): Promise<AuthorConfig> {
  const response = await fetch(url)
  const json = await response.json()
  return AuthorConfigSchema.validate(json)
}
