<script setup lang="ts">
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex">
    <div v-if="state.tabs.length === 0" class="px-3 py-0.5 text-stone-500">
      X Editor
    </div>

    <div
      v-for="(tab, index) of state.tabs"
      :key="index"
      class="px-3 py-0.5"
      :class="{
        'bg-stone-200': tab === state.currentTab,
        'bg-white hover:bg-stone-100': tab !== state.currentTab,
      }"
    >
      <button @click="state.currentTab = tab">
        {{ tab.file.name }}
      </button>
    </div>
  </div>
</template>
