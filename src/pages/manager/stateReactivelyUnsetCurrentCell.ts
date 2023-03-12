import { watch } from 'vue'
import { State } from './State'

export function stateReactivelyUnsetCurrentCell(state: State): void {
  watch(
    () => state.currentRowIndex,

    (value) => {
      if (value === undefined) {
        return
      }

      state.currentCellIndex = undefined
      state.currentCellColumnName = undefined
      state.currentCellIsOpen = undefined
    },

    {
      immediate: true,
    },
  )
}
