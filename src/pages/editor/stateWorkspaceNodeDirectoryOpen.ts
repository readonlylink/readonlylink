import { State } from './State'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { loadWorkspaceNodes } from './loadWorkspaceNodes'

export async function stateWorkspaceNodeDirectoryOpen(
  state: State,
  node: WorkspaceNodeDirectory,
): Promise<void> {
  if (!state.currentWorkspace) {
    return
  }

  node.children = await loadWorkspaceNodes(
    state.currentWorkspace.handle,
    node.handle,
  )

  node.isOpen = true
}
