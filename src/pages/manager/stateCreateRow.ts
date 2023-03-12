import { State } from './State'
import { stateHeaders } from './stateHeaders'
import { stateStatusError, stateStatusOk } from './stateStatus'

export async function stateCreateRow(state: State, data: any): Promise<void> {
  const who = 'stateCreateRow'

  const response = await fetch(new URL(`/${data['@path']}`, state.url), {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...stateHeaders(state),
    },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    const created = await response.json()
    state.dataset.push(created)
    stateStatusOk(state, {
      who,
      message: 'new row created',
      data: created,
    })
  } else {
    stateStatusError(state, {
      who,
      message: response.statusText,
    })
  }
}
