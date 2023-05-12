import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { tabFromFileHandle } from './tabFromFileHandle'

export async function stateWorkspaceNodeFileOpen(
  state: State,
  node: WorkspaceNodeFile,
): Promise<void> {
  const tab = await tabFromFileHandle(node.fileHandle)
  state.tabs.push(tab)
  state.currentTab = tab
}
