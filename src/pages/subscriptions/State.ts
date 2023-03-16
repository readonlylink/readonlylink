export type State = {
  list: Array<string>
}

export type StateOptions = {}

export async function loadState(options: {}): Promise<State> {
  return {
    list: [],
  }
}
