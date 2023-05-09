import { State } from './State'

export async function stateOpenFile(state: State): Promise<void> {
  const [fileHandle] = await window.showOpenFilePicker()
  const file = await fileHandle.getFile()
  state.currentFile = file
  const text = await file.text()
  state.currentText = text
}
