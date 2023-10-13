import * as Kv from 'idb-keyval'
import { State } from './State'
import { stateLoad } from './stateLoad'

export async function stateRefresh(state: State): Promise<void> {
  const store = Kv.createStore('readonly.link/authors', 'cache')
  const newState = await stateLoad(state)
  delete newState.path
  Object.assign(state, newState)
  await Kv.set(state.url, newState, store)
}
