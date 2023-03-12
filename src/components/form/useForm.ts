import { reactive } from 'vue'
import { Form, FormValues } from './Form'

export function useForm<T extends FormValues>(values: T): Form<T> {
  return reactive({
    values,
    processing: false,
  }) as Form<T>
}
