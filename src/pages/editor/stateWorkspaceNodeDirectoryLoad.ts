import { State } from './State'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeDirectoryLoadChildren } from './workspaceNodeDirectoryLoadChildren'

export async function stateWorkspaceNodeDirectoryLoad(
  state: State,
  node: WorkspaceNodeDirectory,
): Promise<void> {
  if (!state.currentWorkspace) {
    return
  }

  node.children = await workspaceNodeDirectoryLoadChildren(
    state.currentWorkspace.root,
    node,
  )
  node.isLoaded = true
}
