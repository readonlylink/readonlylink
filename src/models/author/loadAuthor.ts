import { Author } from '../../models/author/Author'
import { loadAuthorConfig } from './loadAuthorConfig'

export async function loadAuthor(url: string): Promise<Author> {
  return { url, config: await loadAuthorConfig(url) }
}
