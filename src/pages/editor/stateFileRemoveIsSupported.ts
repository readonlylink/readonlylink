import { State } from './State'

export function stateFileRemoveIsSupported(
  state: State,
): undefined | (() => Promise<void>) {
  if (!state.currentTab) {
    return
  }

  return (state.currentTab.fileHandle as any).remove
}
