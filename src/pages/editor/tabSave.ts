import { Tab } from './Tab'

export async function tabSave(tab: Tab): Promise<void> {
  tab.isProcessing = true
  const writable = await tab.fileHandle.createWritable()
  await writable.write(tab.text)
  await writable.close()
  tab.originalText = tab.text
  tab.isProcessing = false
}
