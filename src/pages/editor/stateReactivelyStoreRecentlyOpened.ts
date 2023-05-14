import * as Kv from 'idb-keyval'
import { watch } from 'vue'
import { State } from './State'

export function stateReactivelyStoreRecentlyOpened(state: State): void {
  watch(
    () => state.recentlyOpened.fileHandles,
    async (value) => {
      await Kv.set('Editor/recentlyOpened.fileHandles', value)
    },
    { deep: true },
  )

  watch(
    () => state.recentlyOpened.directoryHandles,
    async (value) => {
      await Kv.set('Editor/recentlyOpened.directoryHandles', value)
    },
    { deep: true },
  )
}
