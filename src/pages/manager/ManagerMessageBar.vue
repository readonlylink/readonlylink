<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="scrollbar-hide flex items-center overflow-x-auto overflow-y-hidden whitespace-nowrap border-x border-stone-900 px-1 text-sm"
  >
    <span>{{ state.message }}</span>
    <!-- placeholder -->
    <span>&nbsp;</span>
  </div>
</template>
