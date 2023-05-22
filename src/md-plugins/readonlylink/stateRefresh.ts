import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const store = Kv.createStore('<readonlylink>', 'configs')

  // TODO

  state.isRefreshed = true
}
