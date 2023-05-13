import { Tab } from './Tab'

export function tabFileRemoveIsSupported(tab: Tab): boolean {
  return Boolean((tab.fileHandle as any).remove)
}
