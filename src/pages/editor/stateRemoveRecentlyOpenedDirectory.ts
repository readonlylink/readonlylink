import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateRemoveRecentlyOpenedDirectory(
  state: State,
  name: string,
): Promise<void> {
  delete state.recentlyOpened.directoryHandles[name]
  await Kv.del(['Editor/state.recentlyOpened.directoryHandles', name])
}
