import { State } from './State'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { workspaceNodeCompare } from './workspaceNodeCompare'
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
  node.children.sort(workspaceNodeCompare)

  if (child.kind === 'WorkspaceNodeFile') {
    await stateWorkspaceNodeFileOpen(state, child)
  }
}
