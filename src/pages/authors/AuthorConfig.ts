import ty, { Schema } from '@xieyuheng/ty'

export type AuthorConfig = {
  name: string
  tagline?: string
  avatar: string
  homepage: string
  activities: Array<string>
}

export const AuthorConfigSchema: Schema<AuthorConfig> = ty.object({
  name: ty.string(),
  tagline: ty.optional(ty.string()),
  avatar: ty.string(),
  homepage: ty.string(),
  activities: ty.array(ty.string()),
})
