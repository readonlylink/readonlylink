<script setup lang="ts">
import { Cell } from './Cell'
import { State } from './State'

defineProps<{
  state: State
  cell: Cell
}>()
</script>

<template>
  <input
    disabled
    class="w-full min-w-max px-1 focus:outline-none"
    :class="[state.isCurrentCell(cell) && 'bg-stone-100']"
    v-model="cell.value"
    :size="cell.value.length * 0.9"
  />
</template>
