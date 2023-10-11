import { Schema, ty } from '@xieyuheng/ty'

export type AuthorContact = {
  bilibili?: string
  github?: string
  email?: string
  twitter?: string
  mimor?: string
}

export const AuthorContactSchema: Schema<AuthorContact> = ty.object({
  bilibili: ty.optional(ty.string()),
  github: ty.optional(ty.string()),
  email: ty.optional(ty.string()),
  twitter: ty.optional(ty.string()),
  mimor: ty.optional(ty.string()),
})
