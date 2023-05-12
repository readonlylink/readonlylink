import {
  WorkspaceNode,
  WorkspaceNodeDirectory,
  WorkspaceNodeFile,
} from './WorkspaceNode'

export function workspaceNodeFromHandle(
  handle: FileSystemFileHandle | FileSystemDirectoryHandle,
): WorkspaceNode {
  switch (handle.kind) {
    case 'file': {
      return WorkspaceNodeFile(handle)
    }

    case 'directory': {
      return WorkspaceNodeDirectory(handle)
    }
  }
}
