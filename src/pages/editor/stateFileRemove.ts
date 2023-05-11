import { State } from './State'

export async function stateFileRemove(state: State): Promise<void> {
  const who = 'stateFileRemove'

  if (!state.currentTab) {
    return
  }

  const remove = (state.currentTab.fileHandle as any).remove
  if (typeof remove === 'function') {
    await remove()
  } else {
    state.message = `[${who}] <> removing file is not supported`
  }
}
