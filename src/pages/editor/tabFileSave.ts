import { Tab } from './Tab'
import { formatReportMessage } from './formatReportMessage'

export async function tabFileSave(
  tab: Tab,
  report: { message?: string },
): Promise<void> {
  const who = 'tabFileSave'

  report.message = formatReportMessage({
    who,
    data: { file: tab.file.name },
  })

  tab.isProcessing = true

  try {
    const writable = await tab.handle.createWritable()
    await writable.write(tab.text)
    await writable.close()
    tab.originalText = tab.text
  } catch (error) {
    report.message = formatReportMessage({
      who,
      message: error instanceof Error ? error.message : String(error),
      data: { file: tab.file.name },
    })
  }

  tab.isProcessing = false
}
