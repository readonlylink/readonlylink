import { WorkspaceNode } from './WorkspaceNode'

export type Workspace = {
  directoryHandle: FileSystemDirectoryHandle
  nodes: Array<WorkspaceNode>
}
