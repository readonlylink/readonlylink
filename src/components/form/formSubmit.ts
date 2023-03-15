import { Form, FormValues } from './Form'

type Action<T extends FormValues> = (values: T) => Promise<void>

export async function formSubmit<T extends FormValues>(
  form: Form<T>,
  event: Event,
  action: Action<T>,
): Promise<void> {
  form.processing = true

  try {
    assignValuesFromEvent(event, form.values)
    await action(form.values)
  } catch (error) {
    if (error instanceof Error) {
      form.error = error
    } else {
      form.error = new Error(`unknown error`)
      console.error({ message: 'unknown error', error })
    }
  }

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
