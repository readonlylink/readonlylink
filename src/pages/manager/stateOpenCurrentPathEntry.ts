import {
  createPathEntry,
  PathEntry,
  pathEntryPartialSummation,
} from './PathEntry'
import { State } from './State'
import { stateHeaders } from './stateHeaders'
import { stateStatusError } from './stateStatus'

export async function stateOpenCurrentPathEntry(state: State): Promise<void> {
  const currentPathEntry = state.currentPathEntry
  if (currentPathEntry === undefined) {
    return
  }

  const pathEntries = pathEntryPartialSummation(currentPathEntry)

  for (const pathEntry of pathEntries) {
    if (
      pathEntry.path === currentPathEntry.path &&
      pathEntry.kind === 'Directory' &&
      currentPathEntry.kind === 'Directory'
    ) {
      pathEntry.isOpen = currentPathEntry.isOpen
    }
  }

  await openPathEntries(state, pathEntries)

  const parentPathEntry = pathEntries[0]

  const index = state.pathEntries.findIndex(
    (pathEntry) => pathEntry.path === parentPathEntry.path,
  )

  if (index === -1) {
    state.pathEntries.push(parentPathEntry)
  } else {
    state.pathEntries.splice(index, 1, parentPathEntry)
  }
}

async function openPathEntries(
  state: State,
  pathEntries: Array<PathEntry>,
): Promise<void> {
  const [first, second, ...rest] = pathEntries

  if (second === undefined) {
    if (first.kind === 'Directory' && first.isOpen) {
      await openPathEntry(state, first)
    }

    return
  }

  await openPathEntry(state, first)

  if (first.kind === 'Directory') {
    const index = first.children.findIndex(
      (child) => child.path === second.path,
    )

    if (index === -1) {
      first.children.push(second)
    } else {
      first.children.splice(index, 1, second)
    }
  }

  await openPathEntries(state, [second, ...rest])
}

async function openPathEntry(
  state: State,
  pathEntry: PathEntry,
): Promise<void> {
  if (pathEntry.kind !== 'Directory') {
    return
  }

  pathEntry.isOpen = true

  const response = await fetch(
    new URL(
      `/${pathEntry.path}?kind=directory&page=${pathEntry.page}&size=${pathEntry.size}`,
      state.url,
    ),
    {
      method: 'GET',
      headers: {
        ...stateHeaders(state),
      },
    },
  )

  if (response.ok) {
    const results = await response.json()
    pathEntry.children = results.map(createPathEntry)
  } else {
    stateStatusError(state, {
      who: 'stateOpenCurrentPathEntry / openPathEntry',
      message: response.statusText,
      data: {
        url: state.url,
        pathEntry,
      },
    })
  }
}
