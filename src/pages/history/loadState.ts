import { loadGlobalHistory } from '../../reactives/loadGlobalHistory'
import { State } from './State'

export async function loadState(): Promise<State> {
  const history = await loadGlobalHistory()

  return {
    history,
  }
}
