import {
  loadGlobalHistory,
  sortGlobalHistoryRecord,
} from '../../reactives/loadGlobalHistory'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const history = await loadGlobalHistory()

  sortGlobalHistoryRecord()

  return {
    history,
  }
}
