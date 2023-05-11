import { State } from './State'
import { formatReportMessage } from './formatReportMessage'
import { stateFileRemoveIsSupported } from './stateFileRemoveIsSupported'
import { stateTabClose } from './stateTabClose'

export async function stateFileRemove(state: State): Promise<void> {
  const who = 'stateFileRemove'

  if (!state.currentTab) {
    return
  }

  const remove = stateFileRemoveIsSupported(state)
  if (!remove) {
    state.message = `[${who}] <> removing file is not supported`
    return
  }

  try {
    await remove()
    await stateTabClose(state, state.currentTab)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    state.message = formatReportMessage({ who, message })
  }
}
