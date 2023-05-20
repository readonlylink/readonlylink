import { loadAuthor } from '../../models/author/loadAuthor'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export type StateOptions = {
  kind?: string
  list: Array<string>
}

export async function loadState(options: StateOptions): Promise<State> {
  const { kind, list } = options

  const authors = await promiseAllFulfilled(list.map(loadAuthor))

  return {
    kind,
    list,
    authors,
    activities: [],
  }
}
