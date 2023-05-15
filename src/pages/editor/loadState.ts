import * as Kv from 'idb-keyval'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  return {
    tabs: [],
    recentlyOpened: {
      fileHandles:
        (await Kv.get('Editor/state.recentlyOpened.fileHandles')) || {},
      directoryHandles:
        (await Kv.get('Editor/state.recentlyOpened.directoryHandles')) || {},
    },
  }
}
