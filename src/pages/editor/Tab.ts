export type Tab = {
  fileHandle: FileSystemFileHandle
  file: File
  text: string
  originalText: string
  isProcessing: boolean
  scrollTop: number
  isHeightOverflow?: boolean
}
