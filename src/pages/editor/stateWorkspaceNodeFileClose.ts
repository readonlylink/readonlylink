import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'

export async function stateWorkspaceNodeFileClose(
  state: State,
  node: WorkspaceNodeFile,
): Promise<void> {
  if (node.parent) {
    const index = node.parent.children.indexOf(node)
    if (index !== -1) {
      node.parent.children.splice(index, 1)
    }
  }
}
