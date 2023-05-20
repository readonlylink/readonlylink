import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Author } from '../author/Author'
import { Activity } from './Activity'
import { loadActivity } from './loadActivity'

export async function loadAuthorActivities(
  author: Author,
): Promise<Array<Activity>> {
  return await promiseAllFulfilled(
    author.config.activities.map((path) => loadActivity(author, path)),
  )
}
