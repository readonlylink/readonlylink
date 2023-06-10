import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadState } from './loadState'

export async function stateRefresh(state: State): Promise<void> {
  const store = Kv.createStore('readonly.link/manuals', 'cache')
  const newState = await loadState(state)
  delete newState.path
  Object.assign(state, newState)
  await Kv.set(state.url, newState, store)
}
