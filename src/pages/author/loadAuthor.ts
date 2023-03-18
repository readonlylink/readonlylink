import { Author } from './Author'
import { loadAuthorConfig } from './loadAuthorConfig'

export async function loadAuthor(url: string): Promise<Author> {
  const config = await loadAuthorConfig(url)

  return {
    url,
    config,
  }
}
