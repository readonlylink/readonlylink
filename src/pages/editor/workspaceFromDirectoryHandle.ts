import { Workspace } from './Workspace'

export function workspaceFromDirectoryHandle(
  directoryHandle: FileSystemDirectoryHandle,
): Workspace {
  return {
    directoryHandle,
  }
}
