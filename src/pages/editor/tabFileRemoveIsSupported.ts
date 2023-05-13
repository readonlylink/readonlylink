import { Tab } from './Tab'

export function tabFileRemoveIsSupported(tab: Tab): boolean {
  return 'remove' in tab.handle && typeof tab.handle.remove === 'function'
}
