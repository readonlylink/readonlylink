import * as Kv from 'idb-keyval'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { Author } from '../author/Author'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const authorURLs = useDefaultAuthorList()
  const results = await Promise.allSettled(authorURLs.map(loadAuthor))
  const authors: Array<Author> = []
  for (const result of results) {
    if (result.status === 'fulfilled') {
      authors.push(result.value)
    }
  }

  state.authors = authors

  // No need to await.
  Kv.set('AuthorList/state.authors', authors)
}
