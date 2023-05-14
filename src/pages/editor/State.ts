import { Tab } from './Tab'
import { Workspace } from './Workspace'

export type State = {
  currentTab?: Tab
  currentWorkspace?: Workspace
  tabs: Array<Tab>
  message?: string
  showDotFiles?: boolean
  recentlyOpened: {
    fileHandles: Array<FileSystemFileHandle>
    directoryHandles: Array<FileSystemDirectoryHandle>
  }
}
