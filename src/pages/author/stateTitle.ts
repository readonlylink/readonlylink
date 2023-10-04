import { State } from './State'

export function stateTitle(state: State): string {
  if (state.path === undefined) {
    return state.config.name
  }

  if (state.path === state.config.homepage) {
    return state.config.name
  }

  if (state.path === 'activities') {
    return `activities | ${state.config.name}`
  }

  for (const [name, path] of Object.entries(state.config.tabs || {})) {
    if (path === state.path) {
      return `${name} | ${state.config.name}`
    }
  }

  return state.config.name
}
