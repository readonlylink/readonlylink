import { State } from './State'

export async function stateRemoveRecentlyOpenedDirectory(
  state: State,
  name: string,
): Promise<void> {
  delete state.recentlyOpened.directoryHandles[name]
}
