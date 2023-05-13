import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { loadWorkspaceNodes } from './loadWorkspaceNodes'

export async function loadWorkspace(
  handle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const root = WorkspaceNodeDirectory(handle)

  root.children = await loadWorkspaceNodes(root, root)

  return { root }
}
