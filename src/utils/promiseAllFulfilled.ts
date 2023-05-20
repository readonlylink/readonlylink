export async function promiseAllFulfilled<T>(
  promises: Array<Promise<T>>,
): Promise<Array<T>> {
  const results = await Promise.allSettled(promises)

  const values: Array<T> = []
  for (const result of results) {
    if (result.status === 'fulfilled') {
      values.push(result.value)
    }
  }

  return values
}
