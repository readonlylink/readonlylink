import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { loadAuthors } from './loadAuthors'
import { State } from './State'

export async function stateLoadAuthors(state: State): Promise<void> {
  const subscription = useGlobalSubscription()
  state.authors = await loadAuthors(subscription.list)
}
