import { ExtensionStore } from '../../components/md/extension-store'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { loadAuthors } from './loadAuthors'
import { State } from './State'

export type StateOptions = {
  kind?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { kind } = options

  const subscription = useGlobalSubscription()
  const authors = await loadAuthors(subscription.list)
  const extensions = new ExtensionStore()

  return {
    kind,
    authors,
    extensions,
    activities: [],
  }
}
