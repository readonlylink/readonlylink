import { loadAuthors, State } from './State'

export async function stateLoadAuthors(state: State): Promise<void> {
  state.authors = await loadAuthors(state.list)
}
