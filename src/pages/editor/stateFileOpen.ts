import { State } from './State'
import { ensurePermission } from './ensurePermission'
import { tabFromFileHandle } from './tabFromFileHandle'

export async function stateFileOpen(state: State): Promise<void> {
  const [fileHandle] = await window.showOpenFilePicker()
  await stateOpenFileHandle(state, fileHandle)
}

export async function stateOpenFileHandle(
  state: State,
  fileHandle: FileSystemFileHandle,
): Promise<void> {
  await ensurePermission(fileHandle)

  const tab = await tabFromFileHandle(fileHandle)
  state.tabs.push(tab)
  state.currentTab = tab
  state.recentlyOpened.fileHandles[fileHandle.name] = fileHandle
}
