import * as Kv from 'idb-keyval'
import { loadAuthor } from '../../models/author'
import { useDefaultAuthorList } from '../../models/author-list'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const list = useDefaultAuthorList()
  const authors = await promiseAllFulfilled(list.map(loadAuthor))
  state.authors = authors
  await Kv.set('readonly.link/AuthorList/state.authors', authors)
}
