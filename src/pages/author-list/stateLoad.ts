import * as Kv from 'idb-keyval'
import { useDefaultAuthorList } from '../../models/author-list'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

export async function stateLoad(): Promise<State> {
  const list = useDefaultAuthorList()
  const state: State = {
    list,
    authors: [],
  }

  const cachedAuthors = await Kv.get('readonly.link/AuthorList/state.authors')
  if (cachedAuthors) {
    state.authors = cachedAuthors
    state.isLoadedFromCache = true
  } else {
    await stateRefresh(state)
  }

  return state
}
