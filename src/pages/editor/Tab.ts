import { WorkspaceNodeFile } from './WorkspaceNode'

export type Tab = {
  handle: FileSystemFileHandle
  file: File
  text: string
  originalText: string
  isProcessing: boolean
  scrollTop: number
  isHeightOverflow?: boolean
  node?: WorkspaceNodeFile
}
