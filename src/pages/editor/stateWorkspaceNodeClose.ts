import { State } from './State'
import { WorkspaceNode } from './WorkspaceNode'

export async function stateWorkspaceNodeClose(
  state: State,
  node: WorkspaceNode,
): Promise<void> {
  if (node.parent) {
    const index = node.parent.children.indexOf(node)
    if (index !== -1) {
      node.parent.children.splice(index, 1)
    }
  }
}
