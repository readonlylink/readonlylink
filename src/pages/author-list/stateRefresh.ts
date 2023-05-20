import * as Kv from 'idb-keyval'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { asyncRun } from '../../utils/asyncRun'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const authorURLs = useDefaultAuthorList()
  const authors = await promiseAllFulfilled(authorURLs.map(loadAuthor))

  state.authors = authors

  asyncRun(async () => {
    await Kv.set('AuthorList/state.authors', authors)
  })
}
