import { WorkspaceNode } from './WorkspaceNode'
import { tabIsModified } from './tabIsModified'

export function workspaceNodeIsModified(node: WorkspaceNode): boolean {
  switch (node.kind) {
    case 'WorkspaceNodeFile': {
      return node.tab ? tabIsModified(node.tab) : false
    }

    case 'WorkspaceNodeDirectory': {
      return node.children.some(workspaceNodeIsModified)
    }
  }
}
