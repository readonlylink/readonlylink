<script setup lang="ts">
import { Cell } from './Cell'
import { createPathEntry } from './PathEntry'
import { State } from './State'

defineProps<{
  state: State
  cell: Cell
}>()
</script>

<template>
  <button
    class="w-full min-w-max px-1 text-left hover:underline focus:outline-none"
    :class="[state.isCurrentCell(cell) && 'bg-stone-100']"
    @click="
      state.currentPathEntry = createPathEntry({
        kind: 'Directory',
        path: cell.value,
      })
    "
  >
    {{ cell.value }}
  </button>
</template>
