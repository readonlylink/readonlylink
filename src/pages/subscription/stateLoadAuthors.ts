import { loadAuthor } from '../../models/author/loadAuthor'
import { promiseAllFulfilled } from '../../utils/promiseAllFulfilled'
import { State } from './State'

export async function stateLoadAuthors(state: State): Promise<void> {
  state.authors = await promiseAllFulfilled(state.list.map(loadAuthor))
}
