import ty, { Schema } from '@xieyuheng/ty'

export type BookConfig = {
  title: string
  version: string
  authors: Array<string>
  translators?: Array<string>
  year?: string
  src: string
  contents: Array<string>
}

export const BookConfigSchema: Schema<BookConfig> = ty.object({
  title: ty.string(),
  version: ty.string(),
  authors: ty.array(ty.string()),
  translators: ty.optional(ty.array(ty.string())),
  year: ty.optional(ty.string()),
  src: ty.string(),
  contents: ty.array(ty.string()),
})
