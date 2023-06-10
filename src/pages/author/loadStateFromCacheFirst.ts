import * as Kv from 'idb-keyval'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { State } from './State'
import { StateOptions, loadState } from './loadState'

export async function loadStateFromCacheFirst(
  options: StateOptions,
): Promise<State> {
  const { path } = options
  const url = stringTrimEnd(options.url, '/')

  const store = Kv.createStore('readonly.link/authors', 'cache')
  const cached = await Kv.get(url, store)
  if (cached) {
    return {
      ...cached,
      path,
      url,
      isLoadedFromCache: true,
    }
  } else {
    const state = await loadState(options)
    await Kv.set(url, state, store)
    return state
  }
}
