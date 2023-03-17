import { ExtensionStore } from '../../components/md/extension-store'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { useGlobalAuthorList } from '../../reactives/useGlobalAuthorList'
import { loadAuthors } from './loadAuthors'
import { State } from './State'

export type StateOptions = {
  kind?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { kind } = options
  let list = await useGlobalAuthorList()

  if (list.length === 0) {
    list = useDefaultAuthorList()
  }

  const authors = await loadAuthors(list)
  const extensions = new ExtensionStore()

  return {
    kind,
    list,
    authors,
    extensions,
    activities: [],
  }
}
