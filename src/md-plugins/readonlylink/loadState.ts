import * as Kv from 'idb-keyval'
import { State } from './State'
import { loadConfig } from './loadConfig'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options

  const store = Kv.createStore('<readonlylink>', 'configs')
  const cachedConfig = await Kv.get(url, store)
  if (cachedConfig) {
    return {
      url,
      config: cachedConfig,
    }
  } else {
    const config = await loadConfig(url)
    return {
      url,
      config,
    }
  }
}
