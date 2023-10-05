import { watch } from 'vue'
import { useFollowing } from '../../models/following'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
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
