import { State } from './State'
import { tabFromFileHandle } from './tabFromFileHandle'

export async function stateCreateFile(state: State): Promise<void> {
  const fileHandle = await window.showSaveFilePicker({
    types: [
      {
        description: 'Create File',
        accept: {
          'text/*': ['.md', '.txt'],
        },
      },
    ],
  })

  const tab = await tabFromFileHandle(fileHandle)
  state.tabs.push(tab)
  state.currentTab = tab
}
