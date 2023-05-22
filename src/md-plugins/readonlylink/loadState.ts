import { openDB } from 'idb'
import { State } from './State'
import { loadConfig } from './loadConfig'

export type StateOptions = {
  url: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { url } = options
  const config = await loadConfig(url)

  const db = await openDB('readonlylink')

  return {
    url,
    config,
  }
}
