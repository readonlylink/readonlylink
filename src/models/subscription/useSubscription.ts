import { Subscription } from './Subscription'
import { globalSubscription } from './globalSubscription'

let initialized = false

export function useSubscription(): Subscription {
  if (initialized) {
    return globalSubscription
  }

  globalSubscription.list = loadList()

  initialized = true

  return globalSubscription
}

function loadList(): Array<string> {
  const listText = window.localStorage.getItem('globalSubscription.list')
  if (!listText) {
    return []
  }

  return listText.split('\n')
}
