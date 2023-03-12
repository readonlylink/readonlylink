import qs from 'qs'
import { State } from './State'
import { stateHeaders } from './stateHeaders'
import {
  stateStatusError,
  stateStatusOk,
  stateStatusRunning,
} from './stateStatus'

export async function stateUpdateDataset(state: State) {
  const pathEntry = state.currentPathEntry
  if (pathEntry === undefined) {
    return
  }

  if (pathEntry.kind !== 'Directory') {
    return
  }

  const directory = pathEntry.path

  const who = 'stateUpdateDataset'

  state.datasetIsLoading = true
  state.dataset = []

  stateStatusRunning(state, {
    who,
    message: 'loading',
  })

  const query = {
    page: state.page,
    size: state.size,
    properties: {},
  }

  const response = await fetch(
    new URL(`/${directory}?kind=data-find&${qs.stringify(query)}`, state.url),
    {
      method: 'GET',
      headers: {
        ...stateHeaders(state),
      },
    },
  )

  if (response.ok) {
    const results = await response.json()

    state.dataset = results
    state.datasetIsLoading = false
    stateStatusOk(state, {
      who,
      data: {
        directory,
        page: state.page,
        size: state.size,
      },
    })
  } else {
    stateStatusError(state, {
      who,
      message: response.statusText,
    })
  }
}
