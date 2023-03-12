import { createPathEntry, PathEntry } from './PathEntry'
import { State } from './State'
import { stateHeaders } from './stateHeaders'
import { stateOpenCurrentPathEntry } from './stateOpenCurrentPathEntry'
import {
  stateStatusError,
  stateStatusOk,
  stateStatusRunning,
} from './stateStatus'

export async function stateCreateFile(
  state: State,
  path: string,
  children: Array<PathEntry>,
): Promise<void> {
  const who = 'stateCreateFile'

  stateStatusRunning(state, { who, message: 'creating' })

  if (children.find((pathEntry) => pathEntry.path === path)) {
    stateStatusOk(state, {
      who,
      message: 'path already exists',
      data: { path },
    })
    return
  }

  const response = await fetch(new URL(`/${path}?kind=file`, state.url), {
    method: 'POST',
    headers: {
      ...stateHeaders(state),
    },
  })

  if (response.ok) {
    const pathEntry = createPathEntry({
      kind: 'File',
      path,
    })

    children.push(pathEntry)
    state.currentPathEntry = pathEntry
    await stateOpenCurrentPathEntry(state)
    stateStatusOk(state, {
      who,
      message: 'file created',
      data: { path },
    })
  } else {
    stateStatusError(state, {
      who,
      message: response.statusText,
    })
  }
}
