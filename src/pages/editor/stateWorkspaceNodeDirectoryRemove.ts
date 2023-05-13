import { State } from './State'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { stateTabClose } from './stateTabClose'
import { stateWorkspaceNodeClose } from './stateWorkspaceNodeClose'

export async function stateWorkspaceNodeDirectoryRemove(
  state: State,
  node: WorkspaceNodeDirectory,
): Promise<void> {
  if (node.parent) {
    await node.parent.handle.removeEntry(node.handle.name, { recursive: true })
    await stateWorkspaceNodeClose(state, node)
    await stateWorkspaceNodeDirectoryRecursivelyCloseTab(state, node)
  }
}

async function stateWorkspaceNodeDirectoryRecursivelyCloseTab(
  state: State,
  node: WorkspaceNodeDirectory,
) {
  for (const child of node.children) {
    if (child.kind === 'WorkspaceNodeFile' && child.tab) {
      await stateTabClose(state, child.tab)
    }

    if (child.kind === 'WorkspaceNodeDirectory') {
      await stateWorkspaceNodeDirectoryRecursivelyCloseTab(state, child)
    }
  }
}
