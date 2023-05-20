import { loadAuthors } from '../../models/author/loadAuthors'
import { State } from './State'

export async function stateLoadAuthors(state: State): Promise<void> {
  state.authors = await loadAuthors(state.list)
}
