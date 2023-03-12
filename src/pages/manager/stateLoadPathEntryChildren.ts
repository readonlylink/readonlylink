import { createPathEntry, PathEntry } from './PathEntry'
import { State } from './State'
import { stateHeaders } from './stateHeaders'
import { stateStatusError } from './stateStatus'

export async function stateLoadPathEntryChildren(
  state: State,
  pathEntry: PathEntry,
): Promise<void> {
  if (pathEntry.kind !== 'Directory') {
    return
  }

  const who = 'stateLoadPathEntryChildren'

  const directory = pathEntry.path

  const response = await fetch(
    new URL(
      `/${directory}?kind=directory&page=${pathEntry.page}&size=${pathEntry.size}`,
      state.url,
    ),
    {
      method: 'GET',
      headers: {
        ...stateHeaders(state),
      },
    },
  )

  if (!response.ok) {
    stateStatusError(state, {
      who,
      message: response.statusText,
      data: {
        directory,
      },
    })
  }

  const results = await response.json()

  pathEntry.children = results.map(createPathEntry)
}
