import * as Kv from 'idb-keyval'
import { State } from './State'

export type StateOptions = {}

export async function loadState(options: StateOptions): Promise<State> {
  return {
    tabs: [],
    recentlyOpened: {
      fileHandles: await loadFileHandles(),
      directoryHandles: await loadDirectoryHandles(),
    },
  }
}
async function loadFileHandles(): Promise<
  Record<string, FileSystemFileHandle>
> {
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

  return fileHandles
}

async function loadDirectoryHandles(): Promise<
  Record<string, FileSystemDirectoryHandle>
> {
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

  return directoryHandles
}
