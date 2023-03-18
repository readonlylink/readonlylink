import { watch } from 'vue'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { State } from './State'
import { stateLoadAuthors } from './stateLoadAuthors'

export function stateReactivelyUpdateAuthors(state: State) {
  const subscription = useGlobalSubscription()

  watch(
    () => subscription.list,
    async (value) => {
      state.list = value
      await stateLoadAuthors(state)
    },
    {
      deep: true,
    },
  )
}
