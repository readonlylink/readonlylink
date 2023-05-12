import { State } from './State'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { tabFromFileHandle } from './tabFromFileHandle'

export async function stateWorkspaceNodeFileOpen(
  state: State,
  node: WorkspaceNodeFile,
): Promise<void> {
  const tab = await tabFromFileHandle(node.fileHandle)

  if (state.currentWorkspace) {
    const parts = await state.currentWorkspace.directoryHandle.resolve(
      node.fileHandle,
    )
    if (parts) {
      tab.relativePath = parts.join('/')
    }
  }

  const foundTab = state.tabs.find(
    (exitingTab) => exitingTab.relativePath === tab.relativePath,
  )

  if (foundTab) {
    state.currentTab = foundTab
  } else {
    state.tabs.push(tab)
    state.currentTab = tab
  }
}
