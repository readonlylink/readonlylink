import { createPathEntry, PathEntry } from './PathEntry'
import { State } from './State'
import { stateHeaders } from './stateHeaders'
import { stateOpenCurrentPathEntry } from './stateOpenCurrentPathEntry'
import {
  stateStatusError,
  stateStatusOk,
  stateStatusRunning,
} from './stateStatus'

export async function stateCreateDirectory(
  state: State,
  path: string,
  children: Array<PathEntry>,
): Promise<void> {
  const who = 'stateCreateDirectory'

  stateStatusRunning(state, { who, message: 'creating' })

  if (children.find((pathEntry) => pathEntry.path === path)) {
    stateStatusOk(state, {
      who,
      message: 'path already exists',
      data: { path },
    })
    return
  }

  const response = await fetch(new URL(`/${path}?kind=directory`, state.url), {
    method: 'POST',
    headers: {
      ...stateHeaders(state),
    },
  })

  if (response.ok) {
    const pathEntry = createPathEntry({
      kind: 'Directory',
      path,
    })

    children.push(pathEntry)
    state.currentPathEntry = pathEntry
    await stateOpenCurrentPathEntry(state)
    stateStatusOk(state, {
      who,
      message: 'directory created',
      data: { path },
    })
  } else {
    stateStatusError(state, {
      who,
      message: response.statusText,
    })
  }
}
