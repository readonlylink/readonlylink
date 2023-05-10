import { State } from './State'

export async function stateCreateFile(state: State): Promise<void> {
  const fileHandle = await window.showSaveFilePicker({
    types: [
      {
        description: 'Create File',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  })

  console.log(fileHandle)
}
