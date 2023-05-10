import { State } from './State'

export async function stateOpenFile(state: State): Promise<void> {
  const [fileHandle] = await window.showOpenFilePicker()
  const file = await fileHandle.getFile()
  const text = await file.text()
  const tab = {
    fileHandle,
    file,
    text,
  }

  state.tabs.push(tab)
  state.currentTab = tab
}
