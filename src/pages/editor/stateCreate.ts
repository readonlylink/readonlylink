import { State } from './State'

export function stateCreate(): State {
  return {
    tabs: [],
    recentlyOpened: {
      fileHandles: {},
      directoryHandles: {},
    },
  }
}
