import { watch } from 'vue'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { State } from './State'
import { stateLoadAuthors } from './stateLoadAuthors'

export function stateReactivelyUpdateAuthors(state: State) {
  const subscription = useGlobalSubscription()

  watch(
    () => subscription.list,
    async () => {
      await stateLoadAuthors(state)
    },
    {
      deep: true,
    },
  )
}
