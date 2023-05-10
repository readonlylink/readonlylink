<script setup lang="ts">
import { State } from './State'
import { stateOpenFile } from './stateOpenFile'
import { tabSave } from './tabSave'
defineProps<{ state: State }>()
</script>

<template>
  <div class="flex space-x-2 bg-stone-100">
    <button class="p-1" @click="stateOpenFile(state)">Open</button>
    <button
      class="p-1"
      :disabled="!state.currentTab"
      @click="state.currentTab && tabSave(state.currentTab)"
    >
      Save
    </button>
  </div>
</template>
