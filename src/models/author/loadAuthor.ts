import { Author } from '../../models/author/Author'
import { AuthorConfigSchema } from '../../models/author/AuthorConfig'

export async function loadAuthor(url: string): Promise<Author> {
  const response = await fetch(url)
  const json = await response.json()
  const config = AuthorConfigSchema.validate(json)
  return { url, config }
}
