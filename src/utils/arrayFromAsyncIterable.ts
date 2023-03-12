export async function arrayFromAsyncIterable<T>(
  iter: AsyncIterable<T>,
): Promise<Array<T>> {
  const array: Array<T> = []
  for await (const data of iter) {
    array.push(data)
  }

  return array
}
