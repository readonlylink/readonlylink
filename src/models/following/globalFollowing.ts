import { reactive, watch } from 'vue'
import { Following } from './Following'

export const globalFollowing: Following = reactive({
  list: [],
})

watch(
  () => globalFollowing.list,
  (value) => {
    const listText = value.join('\n')
    window.localStorage.setItem('globalFollowing.list', listText)
  },
  {
    deep: true,
  },
)
