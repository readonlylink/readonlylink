import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { workspaceNodeDirectoryLoadChildren } from './workspaceNodeDirectoryLoadChildren'

export async function loadWorkspace(
  handle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const root = WorkspaceNodeDirectory(handle)

  root.children = await workspaceNodeDirectoryLoadChildren(root, root)

  return { root }
}
