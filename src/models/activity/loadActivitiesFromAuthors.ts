import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { Author } from '../author/Author'
import { Activity } from './Activity'
import { loadActivity } from './loadActivity'

export async function loadActivitiesFromAuthors(
  authors: Array<Author>,
): Promise<Array<Activity>> {
  return (
    await promiseAllFulfilled(authors.map(loadActivitiesFromAuthor))
  ).flatMap((activities) => activities)
}

async function loadActivitiesFromAuthor(
  author: Author,
): Promise<Array<Activity>> {
  return await promiseAllFulfilled(
    author.config.activities.map((path) => loadActivity(author, path)),
  )
}
