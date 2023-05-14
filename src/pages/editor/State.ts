import { Tab } from './Tab'
import { Workspace } from './Workspace'

export type State = {
  currentTab?: Tab
  currentWorkspace?: Workspace
  tabs: Array<Tab>
  message?: string
  showDotFiles?: boolean
  recentlyOpened: {
    fileHandles: Record<string, FileSystemFileHandle>
    directoryHandles: Record<string, FileSystemDirectoryHandle>
  }
}
