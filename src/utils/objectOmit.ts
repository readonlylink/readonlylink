export function objectOmit<Key extends string, A extends Record<string, any>>(
  x: A,
  key: Key,
): Omit<A, Key> {
  const result = { ...x }
  delete result[key]
  return result
}
