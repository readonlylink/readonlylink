import { Following } from './Following'
import { globalFollowing } from './globalFollowing'

let initialized = false

export function useFollowing(): Following {
  if (initialized) {
    return globalFollowing
  }

  globalFollowing.list = loadList()

  initialized = true

  return globalFollowing
}

function loadList(): Array<string> {
  const listText = window.localStorage.getItem('globalFollowing.list')
  if (!listText) {
    return []
  }

  return listText.split('\n')
}
