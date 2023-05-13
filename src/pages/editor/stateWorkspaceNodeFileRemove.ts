import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateTabClose } from './stateTabClose'

export async function stateWorkspaceNodeFileRemove(
  state: State,
  node: WorkspaceNodeFile,
): Promise<void> {
  if ('remove' in node.handle && typeof node.handle.remove === 'function') {
    await node.handle.remove()
    if (node.parent) {
      const index = node.parent.children.indexOf(node)
      if (index !== -1) {
        node.parent.children.splice(index, 1)
      }
    }
  }

  if (node.tab) {
    await stateTabClose(state, node.tab)
  }
}
