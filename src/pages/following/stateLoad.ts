import * as Kv from 'idb-keyval'
import { State } from './State'
import { stateRefresh } from './stateRefresh'

export type StateOptions = {
  kind?: string
  list: Array<string>
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { kind, list } = options

  const state: State = {
    kind,
    list,
    authors: [],
    activities: [],
  }

  const cachedAuthors = await Kv.get('readonly.link/Following/state.authors')
  const cachedActivities = await Kv.get(
    'readonly.link/Following/state.activities',
  )
  if (cachedAuthors && cachedActivities) {
    state.authors = cachedAuthors
    state.activities = cachedActivities
    state.isLoadedFromCache = true
  } else {
    await stateRefresh(state)
  }

  return state
}
