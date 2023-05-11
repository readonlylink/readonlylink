import { State } from './State'
import { stateFileRemoveIsSupported } from './stateFileRemoveIsSupported'

export async function stateFileRemove(state: State): Promise<void> {
  const who = 'stateFileRemove'

  if (!state.currentTab) {
    return
  }

  const remove = stateFileRemoveIsSupported(state)
  if (remove) {
    await remove()
  } else {
    state.message = `[${who}] <> removing file is not supported`
  }
}
