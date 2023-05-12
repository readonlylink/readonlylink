import { Workspace } from './Workspace'
import { loadWorkspaceNodes } from './loadWorkspaceNodes'

export async function loadWorkspace(
  handle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const nodes = await loadWorkspaceNodes(handle, handle)

  return { handle, nodes }
}
