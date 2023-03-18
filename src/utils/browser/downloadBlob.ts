export function downloadBlob(blob: Blob, fileName: string): void {
  const a = document.createElement('a')
  const url = URL.createObjectURL(blob)

  a.href = url
  a.download = fileName
  a.click()
  URL.revokeObjectURL(url)
}
