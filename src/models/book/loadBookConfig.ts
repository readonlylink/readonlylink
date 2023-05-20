import { BookConfig, BookConfigSchema } from './BookConfig'

export async function loadBookConfig(options: {
  url: string
}): Promise<BookConfig> {
  const { url } = options

  const response = await fetch(url)
  const json = await response.json()

  return BookConfigSchema.validate(json)
}
