import { formatDateTime } from '../../utils/formatDate'
import { Tab } from './Tab'

export async function tabSave(
  tab: Tab,
  report: { message?: string },
): Promise<void> {
  const who = 'tabSave'
  tab.isProcessing = true
  report.message = `[${who}] <${formatDateTime(Date.now())}> ${tab.file.name}`
  try {
    const writable = await tab.fileHandle.createWritable()
    await writable.write(tab.text)
    await writable.close()
    tab.originalText = tab.text
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    report.message = `[${who}] <${formatDateTime(Date.now())}> ${errorMessage}`
  }

  tab.isProcessing = false
}
