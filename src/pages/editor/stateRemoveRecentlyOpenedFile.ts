import * as Kv from 'idb-keyval'
import { State } from './State'

export async function stateRemoveRecentlyOpenedFile(
  state: State,
  name: string,
): Promise<void> {
  delete state.recentlyOpened.fileHandles[name]
  await Kv.del(['Editor/state.recentlyOpened.fileHandles', name])
}
