import { State } from './State'
import { statePaths } from './statePaths'

export function stateNextPath(state: State): string | undefined {
  if (state.path === undefined) {
    return undefined
  }

  const paths = statePaths(state)
  const index = paths.indexOf(state.path)
  return paths[index + 1]
}
