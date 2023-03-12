import qs from 'qs'
import { formatAuthorizationHeader } from '../../utils/formatAuthorizationHeader'
import { createPathEntry } from './PathEntry'
import { createState, State } from './State'
import { stateOpenCurrentPathEntry } from './stateOpenCurrentPathEntry'

export type LoadStateOptions = {
  url: string
  token: string
}

export async function loadState(options: LoadStateOptions): Promise<State> {
  try {
    const response = await fetch(
      new URL(`/?kind=directory&page=1&size=10000`, options.url),
      {
        method: 'GET',
        headers: {
          authorization: formatAuthorizationHeader(options.token),
        },
      },
    )

    if (!response.ok) {
      throw new Error(
        [
          `[loadState] fail to fetch directory list`,
          `  url: ${options.url}`,
          `  status.code: ${response.status}`,
          `  status.message: ${response.statusText}`,
        ].join('\n'),
      )
    }

    const results = await response.json()

    const pathEntries = results.map(createPathEntry)

    const state = createState({
      url: options.url,
      token: options.token,
      pathEntries,
      ...parseCurrentQueryString(),
    })

    await stateOpenCurrentPathEntry(state)
    return state
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        [`[loadState] ${error.message}`, `  url: ${options.url}`].join('\n'),
      )
    }

    throw error
  }
}

function parseCurrentQueryString() {
  const query = qs.parse(new URL(window.location.href).search, {
    ignoreQueryPrefix: true,
  })

  const currentPathEntry = !query.currentPathKind
    ? undefined
    : !query.currentPath
    ? undefined
    : createPathEntry({
        kind: String(query.currentPathKind) as any,
        path: String(query.currentPath),
        isOpen: query.currentPathIsOpen === undefined ? undefined : true,
      })

  return {
    currentPathEntry,
    page: Number.isNaN(Number.parseInt(String(query.page)))
      ? 1
      : Number.parseInt(String(query.page)),
    currentRowIndex: Number.isNaN(
      Number.parseInt(String(query.currentRowIndex)),
    )
      ? undefined
      : Number.parseInt(String(query.currentRowIndex)),
    currentRowIsOpen: query.currentRowIsOpen === undefined ? undefined : true,
    currentCellIndex: Number.isNaN(
      Number.parseInt(String(query.currentCellIndex)),
    )
      ? undefined
      : Number.parseInt(String(query.currentCellIndex)),
    currentCellColumnName: query.currentCellColumnName
      ? String(query.currentCellColumnName)
      : undefined,
    currentCellIsOpen: query.currentCellIsOpen === undefined ? undefined : true,
  }
}
