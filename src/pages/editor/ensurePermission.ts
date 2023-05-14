export async function ensurePermission(
  handle: FileSystemHandle,
): Promise<boolean> {
  if ((await handle.queryPermission({ mode: 'readwrite' })) === 'granted') {
    return true
  }

  if ((await handle.requestPermission({ mode: 'readwrite' })) === 'granted') {
    return true
  }

  return false
}
