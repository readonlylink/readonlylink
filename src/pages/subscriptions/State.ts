import { ExtensionStore } from '../../components/md/extension-store'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { useGlobalAuthorList } from '../../reactives/useGlobalAuthorList'
import { Author } from '../authors/Author'
import { Activity } from './Activity'
import { loadAuthors } from './loadAuthors'

export type State = {
  kind?: string
  list: Array<string>
  authors: Array<Author>
  activities: Array<Activity>
  extensions: ExtensionStore
}

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
