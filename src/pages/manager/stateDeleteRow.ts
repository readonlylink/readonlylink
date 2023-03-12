import { State } from './State'
import { stateHeaders } from './stateHeaders'
import {
  stateStatusError,
  stateStatusOk,
  stateStatusRunning,
} from './stateStatus'

export async function stateDeleteRow(
  state: State,
  index: number,
): Promise<void> {
  const who = 'stateDeleteRow'

  stateStatusRunning(state, { who, message: 'deleting' })

  const data = state.dataset[index]
  if (data === undefined) {
    stateStatusOk(state, {
      who,
      message: 'row does not exist',
      data: { index },
    })
    return
  }

  const response = await fetch(new URL(`/${data['@path']}`, state.url), {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      ...stateHeaders(state),
    },
    body: JSON.stringify({
      '@revision': data['@revision'],
    }),
  })

  if (response.ok) {
    state.dataset.splice(index, 1)
    stateStatusOk(state, {
      who,
      message: 'row deleted',
      data: { index },
    })
  } else {
    stateStatusError(state, {
      who,
      message: response.statusText,
    })
  }
}
