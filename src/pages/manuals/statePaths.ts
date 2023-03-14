import { State } from './State'

export function statePaths(state: State): Array<string> {
  return Object.keys(state.texts)
}
