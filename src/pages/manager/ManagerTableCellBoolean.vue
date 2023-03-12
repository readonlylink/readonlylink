<script setup lang="ts">
import { Cell } from './Cell'
import { State } from './State'
import { stateSaveCell } from './stateSaveCell'

defineProps<{
  state: State
  cell: Cell
}>()
</script>

<template>
  <div :class="[cell.value ? 'text-green-600' : 'text-red-600']">
    <div
      class="flex justify-end space-x-0.5 px-1"
      :class="[
        state.isCurrentCell(cell) && 'bg-stone-200 ring-1 ring-stone-500',
      ]"
      @click="
        () => {
          cell.value = !cell.value
          stateSaveCell(state, cell)
        }
      "
    >
      <span class="whitespace-nowrap">{{ cell.value }}</span>
    </div>
  </div>
</template>
