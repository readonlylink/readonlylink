import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'

export function stateWorkspaceNodeIsCurrentTab(
  state: State,
  node: WorkspaceNodeFile,
): boolean {
  if (!state.currentTab) {
    return false
  }
  if (!state.currentWorkspace) {
    return false
  }

  return node.relativePath === state.currentTab.node?.relativePath
}
