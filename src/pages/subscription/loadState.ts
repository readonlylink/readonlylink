import { ExtensionStore } from '../../components/md/extension-store'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { loadAuthors } from './loadAuthors'
import { State } from './State'

export type StateOptions = {
  kind?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { kind } = options

  const subscription = useGlobalSubscription()

  if (subscription.list.length === 0) {
    subscription.list = useDefaultAuthorList()
  }

  const authors = await loadAuthors(subscription.list)

  const extensions = new ExtensionStore()

  return {
    kind,
    authors,
    extensions,
    activities: [],
  }
}
