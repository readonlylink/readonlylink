import { z, ZodType } from 'zod'

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

export const ManualConfigSchema: ZodType<ManualConfig> = z.object({
  kind: z.literal('Manual'),
  title: z.string(),
  subtitle: z.optional(z.string()),
  version: z.optional(z.string()),
  authors: z.array(z.string()),
  translators: z.optional(z.array(z.string())),
  year: z.optional(z.string()),
  date: z.optional(z.string()),
  src: z.string(),
  main: z.string(),
  sections: z.record(z.string(), z.array(z.string())),
})
