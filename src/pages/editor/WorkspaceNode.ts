export type WorkspaceNode = WorkspaceNodeFile | WorkspaceNodeDirectory

export type WorkspaceNodeFile = {
  kind: 'WorkspaceNodeFile'
  fileHandle: FileSystemFileHandle
}

export function WorkspaceNodeFile(
  fileHandle: FileSystemFileHandle,
): WorkspaceNodeFile {
  return {
    kind: 'WorkspaceNodeFile',
    fileHandle,
  }
}

export type WorkspaceNodeDirectory = {
  kind: 'WorkspaceNodeDirectory'
  directoryHandle: FileSystemDirectoryHandle
  children: Array<WorkspaceNode>
  isLoaded: boolean
}

export function WorkspaceNodeDirectory(
  directoryHandle: FileSystemDirectoryHandle,
): WorkspaceNodeDirectory {
  return {
    kind: 'WorkspaceNodeDirectory',
    directoryHandle,
    children: [],
    isLoaded: false,
  }
}
