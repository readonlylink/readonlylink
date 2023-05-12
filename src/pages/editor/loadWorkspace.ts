import { Workspace } from './Workspace'
import { loadWorkspaceNodes } from './loadWorkspaceNodes'

export async function loadWorkspace(
  directoryHandle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  const nodes = await loadWorkspaceNodes(directoryHandle, directoryHandle)

  return {
    directoryHandle,
    nodes,
  }
}
