import { watch } from 'vue'
import { State } from './State'
import { stateLoadActivities } from './stateLoadActivities'

export function stateReactivelyUpdateActivities(state: State) {
  watch(
    () => state.authors,
    async () => {
      await stateLoadActivities(state)
    },
    {
      immediate: true,
      deep: true,
    },
  )
}
