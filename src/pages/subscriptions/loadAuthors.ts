import { Author } from '../authors/Author'
import { AuthorConfigSchema } from '../authors/AuthorConfig'

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
