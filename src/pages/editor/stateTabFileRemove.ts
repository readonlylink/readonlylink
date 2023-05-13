import { State } from './State'
import { Tab } from './Tab'
import { formatReportMessage } from './formatReportMessage'
import { stateTabClose } from './stateTabClose'
import { stateWorkspaceNodeClose } from './stateWorkspaceNodeClose'

export async function stateTabFileRemove(
  state: State,
  tab: Tab,
): Promise<void> {
  const who = 'stateTabFileRemove'

  if ('remove' in tab.handle && typeof tab.handle.remove === 'function') {
    state.message = formatReportMessage({
      who,
      message: 'removing file',
      data: { file: tab.file.name },
    })

    tab.isProcessing = true

    try {
      await tab.handle.remove()
      await stateTabClose(state, tab)

      if (tab.node) {
        await stateWorkspaceNodeClose(state, tab.node)
      }
    } catch (error) {
      state.message = formatReportMessage({
        who,
        message: error instanceof Error ? error.message : String(error),
        data: { file: tab.file.name },
      })
    }

    tab.isProcessing = false
  } else {
    state.message = formatReportMessage({
      who,
      message: 'removing file is not supported',
      data: { file: tab.file.name },
    })
  }
}
