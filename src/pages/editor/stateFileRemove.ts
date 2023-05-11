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
    try {
      await state.currentTab.fileHandle.remove()
      await stateTabClose(state, state.currentTab)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      state.message = formatReportMessage({ who, message })
    }
  } else {
    state.message = `[${who}] <> removing file is not supported`
  }
}
