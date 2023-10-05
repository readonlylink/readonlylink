import * as Kv from 'idb-keyval'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { loadAuthor } from '../../models/author'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const authors = await promiseAllFulfilled(state.list.map(loadAuthor))
  const activities = await loadActivitiesFromAuthors(authors)
  state.authors = authors
  state.activities = activities
  await Kv.set('readonly.link/Following/state.authors', authors)
  await Kv.set('readonly.link/Following/state.activities', activities)
}
