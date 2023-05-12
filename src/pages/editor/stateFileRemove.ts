import { State } from './State'
import { formatReportMessage } from './formatReportMessage'
import { stateTabClose } from './stateTabClose'

export async function stateFileRemove(state: State): Promise<void> {
  const who = 'stateFileRemove'

  if (!state.currentTab) {
    return
  }

  if (
    'remove' in state.currentTab.fileHandle &&
    typeof state.currentTab.fileHandle.remove === 'function'
  ) {
    state.message = formatReportMessage({
      who,
      message: 'removing file',
      data: { file: state.currentTab.file.name },
    })

    state.currentTab.isProcessing = true

    try {
      await state.currentTab.fileHandle.remove()
      await stateTabClose(state, state.currentTab)
    } catch (error) {
      state.message = formatReportMessage({
        who,
        message: error instanceof Error ? error.message : String(error),
        data: { file: state.currentTab.file.name },
      })
    }

    state.currentTab.isProcessing = false
  } else {
    state.message = formatReportMessage({
      who,
      message: 'removing file is not supported',
      data: { file: state.currentTab.file.name },
    })
  }
}
