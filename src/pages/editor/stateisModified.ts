import { State } from './State'
import { tabIsModified } from './tabIsModified'
import { workspaceNodeIsModified } from './workspaceNodeIsModified'

export function stateisModified(state: State): boolean {
  if (state.tabs.some(tabIsModified)) {
    return true
  }

  if (
    state.currentWorkspace &&
    workspaceNodeIsModified(state.currentWorkspace.root)
  ) {
    return true
  }

  return false
}
