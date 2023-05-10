import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  return {
    tabs: [],
  }
}
