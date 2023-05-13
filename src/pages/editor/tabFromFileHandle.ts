import { Tab } from './Tab'

export async function tabFromFileHandle(
  handle: FileSystemFileHandle,
): Promise<Tab> {
  const file = await handle.getFile()
  const text = await file.text()
  return {
    handle,
    file,
    text,
    originalText: text,
    isProcessing: false,
    scrollTop: 0,
  }
}
