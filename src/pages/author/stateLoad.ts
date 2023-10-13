import { Document, parseDocument } from '@xieyuheng/x-markdown'
import { join } from 'path-browserify'
import { loadActivitiesFromAuthors } from '../../models/activity/loadActivitiesFromAuthors'
import { loadAuthor } from '../../models/author'
import { useHistory } from '../../models/history/useHistory'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { stringTrimEnd } from '../../utils/stringTrimEnd'
import { State } from './State'

export type StateOptions = {
  url: string
  path?: string
}

export async function stateLoad(options: StateOptions): Promise<State> {
  const { path } = options
  const url = stringTrimEnd(options.url, '/')

  const history = await useHistory()
  history.record[url] = { time: Date.now(), url }

  const author = await loadAuthor(url)
  const config = author.config

  const paths = [...Object.values(config.tabs || {}), config.homepage]
  const texts: Record<string, string> = Object.fromEntries(
    await promiseAllFulfilled(
      paths.map(async (path) => {
        const response = await fetch(new URL(join(config.src || '', path), url))
        const text = await response.text()
        return [path, text]
      }),
    ),
  )

  const documents: Record<string, Document> = {}
  for (const [path, text] of Object.entries(texts)) {
    documents[path] = parseDocument(text)
  }

  const activities = await loadActivitiesFromAuthors([author])

  return {
    url,
    path,
    config,
    activities,
    author,
    documents,
  }
}
