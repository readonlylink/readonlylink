import { AuthorConfig, AuthorConfigSchema } from '../authors/AuthorConfig'

export type State = {
  list: Array<string>
  authors: Array<Author>
}

export type Author = {
  url: string
  config: AuthorConfig
}

export type StateOptions = {}

export async function loadState(options: {}): Promise<State> {
  const list = await loadList()
  const authors = await loadAuthors(list)

  return {
    list,
    authors,
  }
}

async function loadList(): Promise<Array<string>> {
  const listText = window.localStorage.getItem(`SubscriptionList:list`)
  if (!listText) {
    return []
  }

  return listText.split('\n')
}

async function loadAuthors(list: Array<string>): Promise<Array<Author>> {
  const who = 'loadAuthors'

  const authors: Array<Author> = []
  for (const url of list) {
    try {
      const response = await fetch(url)
      const json = await response.json()
      const config = AuthorConfigSchema.validate(json)

      authors.push({ url, config })
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
