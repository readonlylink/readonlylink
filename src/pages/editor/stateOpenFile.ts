import { State } from './State'

export async function stateOpenFile(state: State): Promise<void> {
  const [fileHandle] = await window.showOpenFilePicker()
  const tab = await tabFromFileHandlee(fileHandle)
  state.tabs.push(tab)
  state.currentTab = tab
}
