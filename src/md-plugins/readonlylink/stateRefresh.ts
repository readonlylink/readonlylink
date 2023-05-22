import { openDB } from 'idb'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const db = await openDB('readonlylink')

  // TODO

  state.isRefreshed = true
}
