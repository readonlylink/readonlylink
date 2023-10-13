import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadConfig } from './loadConfig'

export type StateOptions = {
  url: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { url } = options

  const store = Kv.createStore('readonly.link/<readonlylink>', 'configs')
  const cachedConfig = await Kv.get(url, store)
  if (cachedConfig) {
    return {
      url,
      config: cachedConfig,
      isLoadedFromCache: true,
    }
  } else {
    const config = await loadConfig(url)
    await Kv.set(url, config, store)
    return {
      url,
      config,
      isLoadedFromCache: false,
    }
  }
}
