import { z, ZodType } from 'zod'

export type BookConfig = {
  kind: 'Book'
  title: string
  subtitle?: string
  version?: string
  authors: Array<string>
  translators?: Array<string>
  year?: string
  date?: string
  src: string
  contents: Array<string>
}

export const BookConfigSchema: ZodType<BookConfig> = z.object({
  kind: z.literal('Book'),
  title: z.string(),
  subtitle: z.optional(z.string()),
  version: z.optional(z.string()),
  authors: z.array(z.string()),
  translators: z.optional(z.array(z.string())),
  year: z.optional(z.string()),
  date: z.optional(z.string()),
  src: z.string(),
  contents: z.array(z.string()),
})
