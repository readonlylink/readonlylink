export function downloadFile(file: string, text: string): void {
  const blob = new Blob([text], { type: 'text/plain' })
  const href = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = href
  link.download = file
  link.click()
  URL.revokeObjectURL(href)
}
