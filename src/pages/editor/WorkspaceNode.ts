import { Tab } from './Tab'

export type WorkspaceNode = WorkspaceNodeFile | WorkspaceNodeDirectory

export type WorkspaceNodeFile = {
  kind: 'WorkspaceNodeFile'
  handle: FileSystemFileHandle
  relativePath?: string
  tab?: Tab
  isHovered?: boolean
  parent?: WorkspaceNodeDirectory
}

export function WorkspaceNodeFile(
  handle: FileSystemFileHandle,
): WorkspaceNodeFile {
  return {
    kind: 'WorkspaceNodeFile',
    handle,
  }
}

export type WorkspaceNodeDirectory = {
  kind: 'WorkspaceNodeDirectory'
  handle: FileSystemDirectoryHandle
  children: Array<WorkspaceNode>
  isOpen: boolean
  isLoaded: boolean
  relativePath?: string
  isHovered?: boolean
  parent?: WorkspaceNodeDirectory
}

export function WorkspaceNodeDirectory(
  handle: FileSystemDirectoryHandle,
): WorkspaceNodeDirectory {
  return {
    kind: 'WorkspaceNodeDirectory',
    handle,
    children: [],
    isOpen: false,
    isLoaded: false,
  }
}
