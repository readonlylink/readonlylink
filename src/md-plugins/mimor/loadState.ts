import { State } from './State'

export type StateOptions = {
  src: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  return {
    src,
  }
}
