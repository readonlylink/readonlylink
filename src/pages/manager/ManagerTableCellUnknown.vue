<script setup lang="ts">
import { Cell } from './Cell'
import { State } from './State'

defineProps<{
  state: State
  cell: Cell
}>()
</script>

<template>
  <div class="flex space-x-0.5 px-1">
    <span class="text-blue-600">Unknown</span>
    <span>(</span>
    <span>{{ cell.value }}</span>
    <span>)</span>
  </div>
</template>
