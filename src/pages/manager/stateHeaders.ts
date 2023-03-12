import { formatAuthorizationHeader } from '../../utils/formatAuthorizationHeader'
import { State } from './State'

export function stateHeaders(state: State): Record<string, string> {
  return {
    authorization: formatAuthorizationHeader(state.token),
  }
}
