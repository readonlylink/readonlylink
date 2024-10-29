import { z, ZodType } from 'zod'
import { AuthorContact, AuthorContactSchema } from './AuthorContact'

export type AuthorConfig = {
  kind: 'Author'
  name: string
  tagline?: string
  avatar: string | { light: string; dark: string }
  homepage: string
  src?: string
  activities: Array<string>
  tabs?: Record<string, string>
  contact?: AuthorContact
}

export const AuthorConfigSchema: ZodType<AuthorConfig> = z.object({
  kind: z.literal('Author'),
  name: z.string(),
  tagline: z.optional(z.string()),
  avatar: z.union([
    z.string(),
    z.object({
      light: z.string(),
      dark: z.string(),
    }),
  ]),
  homepage: z.string(),
  src: z.optional(z.string()),
  activities: z.array(z.string()),
  tabs: z.optional(z.record(z.string(), z.string())),
  contact: z.optional(AuthorContactSchema),
})
