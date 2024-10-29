import { z, ZodType } from 'zod'

export type AuthorContact = {
  bilibili?: string
  github?: string
  email?: string
  twitter?: string
  mimor?: string
}

export const AuthorContactSchema: ZodType<AuthorContact> = z.object({
  bilibili: z.optional(z.string()),
  github: z.optional(z.string()),
  email: z.optional(z.string()),
  twitter: z.optional(z.string()),
  mimor: z.optional(z.string()),
})
