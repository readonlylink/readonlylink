import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateTabClose } from './stateTabClose'
import { stateWorkspaceNodeClose } from './stateWorkspaceNodeClose'

export async function stateWorkspaceNodeFileRemove(
  state: State,
  node: WorkspaceNodeFile,
): Promise<void> {
  if ('remove' in node.handle && typeof node.handle.remove === 'function') {
    await node.handle.remove()
    await stateWorkspaceNodeClose(state, node)
    if (node.tab) {
      await stateTabClose(state, node.tab)
    }
  }
}
