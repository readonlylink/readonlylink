import { ref } from 'vue'

export function createSignal<T>(
  initialValue: T,
): [() => T, (value: T) => void] {
  const valueRef = ref<T>(initialValue)

  function getter(): T {
    return valueRef.value as T
  }

  function setter(value: T): void {
    ;(valueRef.value as T) = value
  }

  return [getter, setter]
}
