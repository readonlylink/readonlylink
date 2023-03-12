<script setup lang="ts">
import { formatDateTime } from '../../utils/formatDate'
import { Cell } from './Cell'
import { State } from './State'

const props = defineProps<{
  state: State
  cell: Cell
}>()
</script>

<template>
  <div
    :disabled="!state.isCurrentCell(cell)"
    class="w-full min-w-max px-1 text-right text-yellow-600 focus:outline-none"
    :class="[state.isCurrentCell(cell) && 'bg-yellow-50']"
  >
    {{ formatDateTime(cell.value) }}
  </div>
</template>
