import { reactive, watch } from 'vue'

type Subscription = {
  list: Array<string>
}

const globalSubscription: Subscription = reactive({
  list: [],
})

let initialized = false

export function useGlobalSubscription(): Subscription {
  const who = 'useGlobalSubscription'

  if (initialized) {
    console.log({ who, message: 'initialized', list: globalSubscription.list })
    return globalSubscription
  }

  globalSubscription.list = loadList()

  console.log({ who, message: 'loadList', list: globalSubscription.list })

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
