<script setup lang="ts">
import { State } from './State'
import { stateOpenFile } from './stateOpenFile'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex space-x-2 bg-stone-100">
    <button class="p-1" @click="stateOpenFile(state)">Open</button>
  </div>
</template>
