import { loadAuthors } from './loadAuthors'
import { State } from './State'

export type StateOptions = {
  kind?: string
  list: Array<string>
}

export async function loadState(options: StateOptions): Promise<State> {
  const { kind, list } = options

  const authors = await loadAuthors(list)

  return {
    kind,
    list,
    authors,
    activities: [],
  }
}
