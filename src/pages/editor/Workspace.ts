import { WorkspaceNode } from './WorkspaceNode'

export type Workspace = {
  handle: FileSystemDirectoryHandle
  nodes: Array<WorkspaceNode>
}
