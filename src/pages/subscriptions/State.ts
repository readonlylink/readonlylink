import { ExtensionStore } from '../../components/md/extension-store'
import { useDefaultAuthorList } from '../../reactives/useDefaultAuthorList'
import { AuthorConfig, AuthorConfigSchema } from '../authors/AuthorConfig'
import { Activity } from './Activity'

export type State = {
  kind?: string
  list: Array<string>
  authors: Array<Author>
  activities: Array<Activity>
  extensions: ExtensionStore
}

export type Author = {
  url: string
  config: AuthorConfig
}

export type StateOptions = {
  kind?: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { kind } = options
  let list = await loadList()

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

async function loadList(): Promise<Array<string>> {
  const listText = window.localStorage.getItem(`Subscription:list`)
  if (!listText) {
    return []
  }

  return listText.split('\n')
}

export async function loadAuthors(list: Array<string>): Promise<Array<Author>> {
  const who = 'loadAuthors'

  const authors = []

  for (const url of list) {
    try {
      const response = await fetch(url)
      const json = await response.json()
      const config = AuthorConfigSchema.validate(json)
      const author = { url, config }
      console.log({ who, author })
      authors.push(author)
    } catch (error) {
      console.error({
        who,
        message: 'fail to load author from url',
        url,
        error,
      })
    }
  }

  return authors
}
