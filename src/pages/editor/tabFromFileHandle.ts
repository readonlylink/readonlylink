import { Tab } from './Tab'

export async function tabFromFileHandle(
  fileHandle: FileSystemFileHandle,
): Promise<Tab> {
  const file = await fileHandle.getFile()
  const text = await file.text()
  return {
    fileHandle,
    file,
    text,
  }
}
