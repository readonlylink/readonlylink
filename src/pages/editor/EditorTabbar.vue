<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex">
    <div
      v-for="(tab, index) of state.tabs"
      :key="index"
      class="px-3 py-0.5 hover:bg-stone-100"
      :class="{
        'bg-stone-200': tab === state.currentTab,
        'bg-white': tab !== state.currentTab,
      }"
    >
      <button @click="state.currentTab = tab">
        {{ tab.file.name }}
      </button>
    </div>
  </div>
</template>
