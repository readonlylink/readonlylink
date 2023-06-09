import * as Kv from 'idb-keyval'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const authors = await promiseAllFulfilled(state.list.map(loadAuthor))
  const activities = await loadActivitiesFromAuthors(authors)
  state.authors = authors
  state.activities = activities
  await Kv.set('readonly.link/Subscription/state.authors', authors)
  await Kv.set('readonly.link/Subscription/state.activities', activities)
}
