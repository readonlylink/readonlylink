import ty, { Schema } from '@xieyuheng/ty'

export type AuthorConfig = {
  kind: 'Author'
  name: string
  tagline?: string
  avatar: string
  homepage: string
  activities: Array<string>
}

export const AuthorConfigSchema: Schema<AuthorConfig> = ty.object({
  kind: ty.const('Author' as const),
  name: ty.string(),
  tagline: ty.optional(ty.string()),
  avatar: ty.string(),
  homepage: ty.string(),
  activities: ty.array(ty.string()),
})
