<script setup lang="ts">
import { State } from './State'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div
    class="px-3 py-1"
    :class="{
      'bg-stone-200': tab === state.currentTab,
      'bg-white hover:bg-stone-100': tab !== state.currentTab,
    }"
  >
    <button @click="state.currentTab = tab">
      {{ tab.file.name }}
    </button>
  </div>
</template>
