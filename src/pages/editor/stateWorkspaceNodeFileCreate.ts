import { State } from './State'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { stateWorkspaceNodeDirectoryLoad } from './stateWorkspaceNodeDirectoryLoad'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { workspaceNodeCreate } from './workspaceNodeCreate'

export async function stateWorkspaceNodeFileCreate(
  state: State,
  node: WorkspaceNodeDirectory,
  name: string,
): Promise<void> {
  if (!state.currentWorkspace) {
    return
  }
  const fileHandle = await node.handle.getFileHandle(name, { create: true })

  const child = await workspaceNodeCreate(
    state.currentWorkspace.root,
    node,
    fileHandle,
  )

  node.children.push(child)

  node.isOpen = true

  if (!node.isLoaded) {
    await stateWorkspaceNodeDirectoryLoad(state, node)
  }

  if (child.kind === 'WorkspaceNodeFile') {
    await stateWorkspaceNodeFileOpen(state, child)
  }
}
