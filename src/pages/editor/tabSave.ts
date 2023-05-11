import { Tab } from './Tab'
import { formatReportMessage } from './formatReportMessage'

export async function tabSave(
  tab: Tab,
  report: { message?: string },
): Promise<void> {
  const who = 'tabSave'
  tab.isProcessing = true
  report.message = formatReportMessage({ who, data: { file: tab.file.name } })
  try {
    const writable = await tab.fileHandle.createWritable()
    await writable.write(tab.text)
    await writable.close()
    tab.originalText = tab.text
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    report.message = formatReportMessage({ who, message })
  }

  tab.isProcessing = false
}
