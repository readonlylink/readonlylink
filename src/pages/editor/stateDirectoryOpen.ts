import { State } from './State'
import { workspaceFromDirectoryHandle } from './workspaceFromDirectoryHandle'

export async function stateDirectoryOpen(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker()
  const workspace = await workspaceFromDirectoryHandle(directoryHandle)
  state.currentWorkspace = workspace

  console.log(workspace)
}
