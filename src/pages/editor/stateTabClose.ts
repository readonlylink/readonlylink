import { State } from './State'
import { Tab } from './Tab'

export async function stateTabClose(state: State, tab: Tab): Promise<void> {
  const index = state.tabs.indexOf(tab)
  if (index === -1) {
    return
  }

  state.tabs.splice(index, 1)

  if (tab === state.currentTab) {
    const nextTab = state.tabs[index]
    if (nextTab) {
      state.currentTab = nextTab
    } else {
      const previousTab = state.tabs[index - 1]
      state.currentTab = previousTab
    }
  }
}
