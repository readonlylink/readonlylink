import { sortGlobalHistoryRecord, useHistory } from '../../reactives/useHistory'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const history = await useHistory()

  sortGlobalHistoryRecord()

  return {
    history,
  }
}
