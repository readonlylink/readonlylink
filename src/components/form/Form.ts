export type FormValues = Record<string, string | boolean>

export type Form<T extends FormValues> = {
  values: T
  processing: boolean
  error?: Error
}
