import { WorkspaceNode, WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeFromHandle } from './workspaceNodeFromHandle'

export async function workspaceNodeCreate(
  root: WorkspaceNodeDirectory,
  parent: WorkspaceNodeDirectory,
  handle: FileSystemFileHandle | FileSystemDirectoryHandle,
): Promise<WorkspaceNode> {
  const node = workspaceNodeFromHandle(handle)

  node.parent = parent

  const parts = await root.handle.resolve(node.handle)
  if (parts) {
    node.relativePath = parts.join('/')
  }

  return node
}
