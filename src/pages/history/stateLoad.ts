import {
  sortGlobalHistoryRecord,
  useHistory,
} from '../../models/history/useHistory'
import { State } from './State'

export type StateOptions = {}

export async function stateLoad(options: StateOptions): Promise<State> {
  const history = await useHistory()

  sortGlobalHistoryRecord()

  return {
    history,
  }
}
