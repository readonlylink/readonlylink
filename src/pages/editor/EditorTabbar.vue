<script setup lang="ts">
import EditorTabbarTab from './EditorTabbarTab.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="scrollbar-h-0 flex items-center overflow-x-auto overflow-y-clip">
    <div v-if="state.tabs.length === 0">&nbsp;</div>

    <EditorTabbarTab
      :key="index"
      v-for="(tab, index) of state.tabs"
      :state="state"
      :tab="tab"
    />
  </div>
</template>
