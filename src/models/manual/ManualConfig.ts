import { Schema, ty } from '@xieyuheng/ty'

export type ManualConfig = {
  kind: 'Manual'
  title: string
  subtitle?: string
  version?: string
  authors: Array<string>
  translators?: Array<string>
  year?: string
  date?: string
  src: string
  main: string
  sections: Record<string, Array<string>>
}

export const ManualConfigSchema: Schema<ManualConfig> = ty.object({
  kind: ty.const('Manual' as const),
  title: ty.string(),
  subtitle: ty.optional(ty.string()),
  version: ty.optional(ty.string()),
  authors: ty.array(ty.string()),
  translators: ty.optional(ty.array(ty.string())),
  year: ty.optional(ty.string()),
  date: ty.optional(ty.string()),
  src: ty.string(),
  main: ty.string(),
  sections: ty.dict(ty.array(ty.string())),
})
