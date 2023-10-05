import { watch } from 'vue'
import { loadAuthor } from '../../models/author'
import { useFollowing } from '../../models/following'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export function stateReactivelyUpdateAuthors(state: State) {
  const following = useFollowing()

  watch(
    () => following.list,
    async (value) => {
      state.list = value
      state.authors = await promiseAllFulfilled(state.list.map(loadAuthor))
    },
    {
      deep: true,
    },
  )
}
