<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex border-t border-black px-3 dark:border-white">
    <div v-if="state.message">{{ state.message }}</div>
    <div v-else>&nbsp;</div>
  </div>
</template>
