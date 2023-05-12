import { State } from './State'
import { loadWorkspace } from './loadWorkspace'

export async function stateDirectoryOpen(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })

  state.currentWorkspace = await loadWorkspace(directoryHandle)
}
