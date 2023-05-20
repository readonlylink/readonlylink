import { Author } from '../../models/author/Author'
import { AuthorConfigSchema } from '../../models/author/AuthorConfig'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'

export async function loadAuthors(list: Array<string>): Promise<Array<Author>> {
  const who = 'loadAuthors'

  const results = await promiseAllFulfilled(
    list.map(async (url) => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        const config = AuthorConfigSchema.validate(json)
        const author = { url, config }
        console.log({ who, author })
        return [author]
      } catch (error) {
        console.error({
          who,
          message: 'fail to load author from url',
          url,
          error,
        })

        return []
      }
    }),
  )

  return results.flatMap((authors) => authors)
}