import { Form, FormValues, Unprocessable } from './Form'

type Action<T extends FormValues> = (values: T) => Promise<{
  unprocessable?: Unprocessable
} | void>

export async function formSubmit<T extends FormValues>(
  form: Form<T>,
  event: Event,
  action: Action<T>,
): Promise<void> {
  form.processing = true
  form.unprocessable = undefined

  assignValuesFromEvent(event, form.values)
  const result = await action(form.values)

  form.unprocessable = result?.unprocessable
  form.processing = false
}

function assignValuesFromEvent(event: Event, values: FormValues): void {
  const target: any = event.target

  for (const key of Object.keys(values)) {
    if (target.hasOwnProperty(key)) {
      if (target[key].type === 'checkbox') {
        values[key] = target[key].checked
      } else {
        values[key] = target[key].value
      }
    }
  }
}
