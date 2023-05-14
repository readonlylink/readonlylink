import { State } from './State'
import { ensurePermission } from './ensurePermission'
import { loadWorkspace } from './loadWorkspace'

export async function stateDirectoryOpen(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })
  await stateOpenDirectoryHandle(state, directoryHandle)
}

export async function stateOpenDirectoryHandle(
  state: State,
  directoryHandle: FileSystemDirectoryHandle,
): Promise<void> {
  await ensurePermission(directoryHandle)

  state.currentWorkspace = await loadWorkspace(directoryHandle)
  state.recentlyOpened.directoryHandles[directoryHandle.name] = directoryHandle
}
