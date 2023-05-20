import { watch } from 'vue'
import { useGlobalSubscription } from '../../reactives/useGlobalSubscription'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export function stateReactivelyUpdateAuthors(state: State) {
  const subscription = useGlobalSubscription()

  watch(
    () => subscription.list,
    async (value) => {
      state.list = value
      state.authors = await promiseAllFulfilled(state.list.map(loadAuthor))
    },
    {
      deep: true,
    },
  )
}
