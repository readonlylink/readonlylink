import { reactive, watch } from 'vue'
import { Subscription } from './Subscription'

const globalSubscription: Subscription = reactive({
  list: [],
})

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

watch(
  () => globalSubscription.list,
  (value) => {
    const listText = value.join('\n')
    window.localStorage.setItem('globalSubscription.list', listText)
  },
  {
    deep: true,
  },
)
