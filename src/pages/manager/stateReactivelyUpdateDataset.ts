import { watch } from 'vue'
import { State } from './State'
import { stateUpdateDataset } from './stateUpdateDataset'

export function stateReactivelyUpdateDataset(state: State): void {
  watch(
    () => state.currentPathEntry?.path,
    async () => {
      await stateUpdateDataset(state)
    },
    {
      immediate: true,
    },
  )

  watch(
    () => state.page,
    async () => {
      await stateUpdateDataset(state)
    },
  )
}
