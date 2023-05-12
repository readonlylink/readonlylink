import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'

export async function stateWorkspaceNodeIsCurrentTab(
  state: State,
  node: WorkspaceNodeFile,
): Promise<boolean> {
  if (!state.currentTab) {
    return false
  }
  if (!state.currentWorkspace) {
    return false
  }

  const parts = await state.currentWorkspace.directoryHandle.resolve(
    node.handle,
  )

  const relativePath = parts ? parts.join('/') : undefined

  return relativePath === state.currentTab.relativePath
}
