import { Tab } from './Tab'

export function tabFileRemoveIsSupported(tab: Tab): boolean {
  return Boolean((tab.handle as any).remove)
}
