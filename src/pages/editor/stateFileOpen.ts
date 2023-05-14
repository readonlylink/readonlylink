import { State } from './State'
import { tabFromFileHandle } from './tabFromFileHandle'

export async function stateFileOpen(state: State): Promise<void> {
  const [fileHandle] = await window.showOpenFilePicker()
  const tab = await tabFromFileHandle(fileHandle)
  state.tabs.push(tab)
  state.currentTab = tab
  state.recentlyOpened.fileHandles[fileHandle.name] = fileHandle
}
