import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadConfig } from './loadConfig'

export async function stateRefresh(state: State): Promise<void> {
  const config = await loadConfig(state.url)
  state.config = config
  const store = Kv.createStore('readonly.link/<readonlylink>', 'configs')
  await Kv.set(state.url, config, store)
}
