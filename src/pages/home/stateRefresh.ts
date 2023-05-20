import * as Kv from 'idb-keyval'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { asyncRun } from '../../utils/asyncRun'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export async function stateRefresh(state: State): Promise<void> {
  const authors = await promiseAllFulfilled(state.list.map(loadAuthor))
  const activities = await loadActivitiesFromAuthors(authors)

  state.activities = activities

  asyncRun(async () => {
    await Kv.set('Home/state.activities', activities)
  })
}
