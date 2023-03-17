import { watch } from 'vue'
import { State } from './State'

export function stateReactivelyUpdateList(state: State) {
  watch(
    () => state.list,
    (value) => {
      const listText = value.join('\n')
      window.localStorage.setItem('Subscription:list', listText)
    },
    {
      deep: true,
    },
  )
}
