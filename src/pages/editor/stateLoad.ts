import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateLoad(state: State): Promise<void> {
  state.recentlyOpened.fileHandles =
    (await Kv.get('Editor/state.recentlyOpened.fileHandles')) || {}

  state.recentlyOpened.directoryHandles =
    (await Kv.get('Editor/state.recentlyOpened.directoryHandles')) || {}
}
