import { parseMarkdown } from '../../components/md/parseMarkdown'
import { isValidDate } from '../../utils/isValidDate'
import { State } from './State'

export async function stateLoadActivities(state: State): Promise<void> {
  const who = 'stateLoadActivities'

  state.activities = []

  for (const author of state.authors) {
    for (const path of author.config.activities) {
      try {
        const response = await fetch(new URL(path, author.url))
        const text = await response.text()
        const document = parseMarkdown(text)
        if (isValidDate(document.attributes.date)) {
          document.attributes.kind = 'Activity'
          const activity = { author, path, text, document }
          console.log({ who, activity })
          state.activities.push(activity)
        } else {
          console.log({
            who,
            message: 'document has no valid date attribute',
            date: document.attributes.date,
          })
        }
      } catch (error) {
        console.error({
          who,
          message: 'fail to load path',
          author,
          path,
          error,
        })
      }
    }
  }
}
