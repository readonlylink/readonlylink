import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateTabClose } from './stateTabClose'

export async function stateWorkspaceNodeFileRemove(
  state: State,
  node: WorkspaceNodeFile,
): Promise<void> {
  if ('remove' in node.handle && typeof node.handle.remove === 'function') {
    await node.handle.remove()
    await stateWorkspaceNodeFileClose(state, node)
  }

  if (node.tab) {
    await stateTabClose(state, node.tab)
  }
}
