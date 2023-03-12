<script setup lang="ts">
import { Cell } from './Cell'
import { State } from './State'
import { stateSaveCell } from './stateSaveCell'
import { stateStatusError } from './stateStatus'

const props = defineProps<{
  state: State
  cell: Cell
}>()

let originalValue = props.cell.value

function saveNumber(state: State, cell: Cell) {
  const n = Number.parseFloat(cell.value)
  if (Number.isNaN(n)) {
    stateStatusError(state, {
      who: 'saveNumber',
      message: 'value is not a number, revert to the original value',
      data: { badValue: cell.value },
    })
    cell.value = originalValue
  } else {
    cell.value = n
    originalValue = n
    stateSaveCell(state, cell)
  }
}
</script>

<template>
  <input
    :disabled="!state.isCurrentCell(cell)"
    class="w-full min-w-max px-1 text-right text-yellow-600 focus:outline-none"
    :class="[state.isCurrentCell(cell) && 'bg-yellow-50']"
    v-model="cell.value"
    :size="Math.ceil(String(cell.value).length * 0.9) || 1"
    @keyup.enter="saveNumber(state, cell)"
    @blur="saveNumber(state, cell)"
  />
</template>
