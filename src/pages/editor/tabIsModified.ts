import { Tab } from './Tab'

export function tabIsModified(tab: Tab): boolean {
  return tab.text !== tab.originalText
}
