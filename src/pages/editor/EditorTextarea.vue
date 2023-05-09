<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
  currentText: string
}>()
</script>

<template>
  <textarea
    class="h-full w-full resize-none"
    placeholder="text..."
    spellcheck="false"
    v-model="state.currentText"
  />
</template>
