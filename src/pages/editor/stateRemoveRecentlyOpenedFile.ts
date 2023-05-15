import { State } from './State'

export async function stateRemoveRecentlyOpenedFile(
  state: State,
  name: string,
): Promise<void> {
  delete state.recentlyOpened.fileHandles[name]
}
