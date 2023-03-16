import ty, { Schema } from '@xieyuheng/ty'

export type AuthorConfig = {
  name: string
  homepage: string
  activities: Array<string>
}

export const AuthorConfigSchema: Schema<AuthorConfig> = ty.object({
  name: ty.string(),
  homepage: ty.string(),
  activities: ty.array(ty.string()),
})
