import { ManualConfig, ManualConfigSchema } from './ManualConfig'

export async function loadManualConfig(options: {
  url: string
}): Promise<ManualConfig> {
  const { url } = options

  const response = await fetch(url)
  const json = await response.json()

  return ManualConfigSchema.validate(json)
}
