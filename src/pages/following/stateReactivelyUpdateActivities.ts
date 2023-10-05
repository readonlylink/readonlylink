import { watch } from 'vue'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { State } from './State'

export function stateReactivelyUpdateActivities(state: State) {
  watch(
    () => state.authors,
    async () => {
      state.activities = await loadActivitiesFromAuthors(state.authors)
    },
    {
      immediate: true,
      deep: true,
    },
  )
}
