import { watch } from 'vue'
import { State } from './State'
import { stateLoadActivities } from './stateLoadActivities'
import { stateLoadAuthors } from './stateLoadAuthors'

export function stateReactivelyUpdateAuthors(state: State) {
  watch(
    () => state.list,
    async (value) => {
      await stateLoadAuthors(state)
    },
    {
      deep: true,
    },
  )
}
