import { parseDocument } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { isValidDate } from '../../utils/isValidDate'
import { Author } from '../author/Author'
import { Activity } from './Activity'

export async function loadActivity(
  author: Author,
  path: string,
): Promise<Activity> {
  const who = 'loadActivity'

  const response = await fetch(
    new URL(join(author.config.src || '', path), author.url),
  )

  const text = await response.text()
  const document = parseDocument(text)
  if (!isValidDate(document.attributes.date)) {
    throw new Error(
      `[${who}] document has no valid date attribute: ${document.attributes.date}`,
    )
  }

  document.attributes.kind = 'Activity'

  return { author, path, text, document }
}
