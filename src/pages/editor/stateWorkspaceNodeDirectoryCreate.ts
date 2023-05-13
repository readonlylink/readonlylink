import { State } from './State'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeCompare } from './workspaceNodeCompare'
import { workspaceNodeCreate } from './workspaceNodeCreate'

export async function stateWorkspaceNodeDirectoryCreate(
  state: State,
  node: WorkspaceNodeDirectory,
  name: string,
): Promise<void> {
  if (!state.currentWorkspace) {
    return
  }
  const directoryHandle = await node.handle.getDirectoryHandle(name, {
    create: true,
  })

  const child = await workspaceNodeCreate(
    state.currentWorkspace.root,
    node,
    directoryHandle,
  )

  node.children.push(child)
  node.children.sort(workspaceNodeCompare)
}
