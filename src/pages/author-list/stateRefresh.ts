import * as Kv from 'idb-keyval'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const list = useDefaultAuthorList()
  const authors = await promiseAllFulfilled(list.map(loadAuthor))

  state.authors = authors

  await Kv.set('AuthorList/state.authors', authors)

  state.isRefreshed = true
}
