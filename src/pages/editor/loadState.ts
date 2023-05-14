import * as Kv from 'idb-keyval'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const fileHandles =
    (await Kv.get('Editor/state.recentlyOpened.fileHandles')) || []

  const directoryHandles =
    (await Kv.get('Editor/state.recentlyOpened.directoryHandles')) || []

  return {
    tabs: [],
    recentlyOpened: {
      fileHandles,
      directoryHandles,
    },
  }
}
