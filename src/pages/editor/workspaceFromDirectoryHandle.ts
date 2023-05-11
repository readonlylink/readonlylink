import { Workspace } from './Workspace'

export async function workspaceFromDirectoryHandle(
  directoryHandle: FileSystemDirectoryHandle,
): Promise<Workspace> {
  return {
    directoryHandle,
  }
}
