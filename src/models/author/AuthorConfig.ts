import ty, { Schema } from '@xieyuheng/ty'
import { AuthorContact, AuthorContactSchema } from './AuthorContact'

export type AuthorConfig = {
  kind: 'Author'
  name: string
  tagline?: string
  avatar: string
  homepage: string
  src?: string
  activities: Array<string>
  tabs?: Record<string, string>
  contact?: AuthorContact
}

export const AuthorConfigSchema: Schema<AuthorConfig> = ty.object({
  kind: ty.const('Author' as const),
  name: ty.string(),
  tagline: ty.optional(ty.string()),
  avatar: ty.string(),
  homepage: ty.string(),
  src: ty.optional(ty.string()),
  activities: ty.array(ty.string()),
  tabs: ty.optional(ty.dict(ty.string())),
  contact: ty.optional(AuthorContactSchema),
})
