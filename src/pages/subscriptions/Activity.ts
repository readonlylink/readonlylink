import ty, { Schema } from '@xieyuheng/ty'
import { AuthorConfig, AuthorConfigSchema } from '../authors/AuthorConfig'

export type Activity = {
  author: AuthorConfig
  path: string
  text: string
}

export const ActivitySchema: Schema<Activity> = ty.object({
  author: AuthorConfigSchema,
  path: ty.string(),
  text: ty.string(),
})
