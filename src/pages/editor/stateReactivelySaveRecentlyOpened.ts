import * as Kv from 'idb-keyval'
import { watch } from 'vue'
import { State } from './State'

export function stateReactivelySaveRecentlyOpened(state: State): void {
  watch(
    () => state.recentlyOpened.fileHandles,
    async (value) => {
      for (const [name, fileHandle] of Object.entries(value)) {
        await Kv.set(
          ['Editor/state.recentlyOpened.fileHandles', name],
          fileHandle,
        )
      }
    },
    { deep: true },
  )

  watch(
    () => state.recentlyOpened.directoryHandles,
    async (value) => {
      for (const [name, directoryHandle] of Object.entries(value)) {
        await Kv.set(
          ['Editor/state.recentlyOpened.directoryHandles', name],
          directoryHandle,
        )
      }
    },
    { deep: true },
  )
}
