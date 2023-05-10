import { Tab } from './Tab'

export async function tabSave(tab: Tab): Promise<void> {
  const writable = await tab.fileHandle.createWritable()
  await writable.write(tab.text)
  await writable.close()
}
