import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { loadAuthor } from '../author/loadAuthor'
import { State } from './State'

export type StateOptions = {
  list: Array<string>
}

export async function loadState(options: StateOptions): Promise<State> {
  const { list } = options

  const authors = await promiseAllFulfilled(list.map(loadAuthor))
  const activities = await loadActivitiesFromAuthors(authors)

  return {
    list,
    authors,
    activities,
  }
}
