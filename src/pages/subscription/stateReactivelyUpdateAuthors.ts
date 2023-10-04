import { watch } from 'vue'
import { useSubscription } from '../../reactives/useSubscription'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export function stateReactivelyUpdateAuthors(state: State) {
  const subscription = useSubscription()

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
