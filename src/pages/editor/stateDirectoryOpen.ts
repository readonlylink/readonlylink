import { State } from './State'
import { workspaceFromDirectoryHandle } from './workspaceFromDirectoryHandle'

export async function stateDirectoryOpen(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })

  const workspace = await workspaceFromDirectoryHandle(directoryHandle)
  state.currentWorkspace = workspace

  for await (const entry of directoryHandle.values()) {
    console.log(entry)
  }
}
