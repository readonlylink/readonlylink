import { loadConfig } from './loadConfig'
import { State } from './State'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options
  const config = await loadConfig(url)

  return {
    url,
    config,
  }
}
