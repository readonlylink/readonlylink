import { State } from './State'

export async function stateOpenFile(state: State): Promise<void> {
  const [fileHandle] = await window.showOpenFilePicker()
  const file = await fileHandle.getFile()
  const text = await file.text()

  state.currentTab = {
    fileHandle,
    file,
    text,
  }
}
