import * as Kv from 'idb-keyval'
import { watch } from 'vue'
import { State } from './State'

export function stateReactivelySaveRecentlyOpened(state: State): void {
  watch(
    () => state.recentlyOpened.fileHandles,
    async (value) => {
      await Kv.set('readonly.link/Editor/state.recentlyOpened.fileHandles', {
        ...value,
      })
    },
    { deep: true },
  )

  watch(
    () => state.recentlyOpened.directoryHandles,
    async (value) => {
      await Kv.set(
        'readonly.link/Editor/state.recentlyOpened.directoryHandles',
        { ...value },
      )
    },
    { deep: true },
  )
}
