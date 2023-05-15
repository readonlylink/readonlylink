import { State } from './State'

export function createState(): State {
  return {
    tabs: [],
    recentlyOpened: {
      fileHandles: {},
      directoryHandles: {},
    },
  }
}
