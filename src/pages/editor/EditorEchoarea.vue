<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex px-3">
    <div v-if="state.message">{{ state.message }}</div>
    <div v-else>&nbsp;</div>
  </div>
</template>
