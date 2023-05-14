import { State } from './State'

export function stateIsMarkdown(state: State): boolean {
  return state.url.endsWith('.md') || state.contentType === 'text/markdown'
}
