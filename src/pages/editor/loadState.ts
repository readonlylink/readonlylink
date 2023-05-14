import * as Kv from 'idb-keyval'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  const fileHandles: Record<string, FileSystemFileHandle> = {}

  for (const [key, value] of await Kv.entries()) {
    if (key instanceof Array) {
      const [prefix, name] = key
      if (
        prefix === 'Editor/state.recentlyOpened.fileHandles' &&
        typeof name === 'string'
      ) {
        fileHandles[name] = value
      }
    }
  }

  const directoryHandles: Record<string, FileSystemDirectoryHandle> = {}

  for (const [key, value] of await Kv.entries()) {
    if (key instanceof Array) {
      const [prefix, name] = key
      if (
        prefix === 'Editor/state.recentlyOpened.directoryHandles' &&
        typeof name === 'string'
      ) {
        directoryHandles[name] = value
      }
    }
  }

  return {
    tabs: [],
    recentlyOpened: {
      fileHandles,
      directoryHandles,
    },
  }
}
