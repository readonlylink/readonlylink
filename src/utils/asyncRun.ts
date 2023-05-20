// To be explicit about async code that no need to be awaited.

export async function asyncRun<T>(f: () => Promise<T>): Promise<T> {
  return await f()
}
