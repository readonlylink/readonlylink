import { reactive } from 'vue'
import { asyncRun } from '../../utils/asyncRun'
import { State } from './State'

export function stateReactive(state: State): State {
  state = reactive(state) as State

  asyncRun(async () => {
    //
  })

  return state
}
