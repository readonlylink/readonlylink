import { WorkspaceNode } from './WorkspaceNode'

export function workspaceNodeName(node: WorkspaceNode): string {
  switch (node.kind) {
    case 'WorkspaceNodeFile': {
      return node.fileHandle.name
    }

    case 'WorkspaceNodeDirectory': {
      return node.directoryHandle.name
    }
  }
}
