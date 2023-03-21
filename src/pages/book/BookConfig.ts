import ty, { Schema } from '@xieyuheng/ty'

export type BookConfig = {
  kind: 'Book'
  title: string
  subtitle?: string
  version: string
  authors: Array<string>
  translators?: Array<string>
  year?: string
  date?: string
  src?: string
  contents: Array<string>
}

export const BookConfigSchema: Schema<BookConfig> = ty.object({
  kind: ty.const('Book' as const),
  title: ty.string(),
  subtitle: ty.optional(ty.string()),
  version: ty.string(),
  authors: ty.array(ty.string()),
  translators: ty.optional(ty.array(ty.string())),
  year: ty.optional(ty.string()),
  date: ty.optional(ty.string()),
  src: ty.optional(ty.string()),
  contents: ty.array(ty.string()),
})

export async function loadBookConfig(options: {
  url: string
}): Promise<BookConfig> {
  const { url } = options

  const response = await fetch(url)
  const json = await response.json()

  return BookConfigSchema.validate(json)
}
