import * as Kv from 'idb-keyval'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

export type StateOptions = {
  list: Array<string>
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { list } = options

  const state: State = {
    list,
    activities: [],
  }

  const cachedActivities = await Kv.get('readonly.link/Home/state.activities')
  if (cachedActivities) {
    state.activities = cachedActivities
    state.isLoadedFromCache = true
  } else {
    await stateRefresh(state)
  }

  return state
}
