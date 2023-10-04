import { reactive, watch } from 'vue'
import { Subscription } from './Subscription'

export const globalSubscription: Subscription = reactive({
  list: [],
})

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
