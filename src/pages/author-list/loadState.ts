import * as Kv from 'idb-keyval'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

export async function loadState(): Promise<State> {
  const list = useDefaultAuthorList()
  const state = {
    list,
    authors: [],
  }

  const cachedAuthors = await Kv.get('AuthorList/state.authors')
  if (cachedAuthors) {
    state.authors = cachedAuthors
  } else {
    await stateRefresh(state)
  }

  return state
}
