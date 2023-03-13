import { Schema } from '@xieyuheng/ty'

export function createProps(
  schemas: Record<string, Schema<unknown>>,
): Record<string, { validator: (value: any) => boolean }> {
  const validators: Record<string, { validator: (value: any) => boolean }> = {}

  for (const [name, schema] of Object.entries(schemas)) {
    validators[name] = {
      validator: (value: any) => {
        return schema.isValid(value)
      },
    }
  }

  return validators
}
