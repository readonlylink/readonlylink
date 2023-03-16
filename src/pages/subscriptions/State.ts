export type State = {
  list: Array<string>
}

export async function loadState(): Promise<State> {
  return {
    list: [],
  }
}
