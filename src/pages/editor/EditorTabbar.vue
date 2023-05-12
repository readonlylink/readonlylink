<script setup lang="ts">
import EditorTabbarTab from './EditorTabbarTab.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div v-if="state.tabs.length === 0" class="py-1">&nbsp;</div>
  <div v-else class="flex w-full items-center">
    <EditorTabbarTab
      class="shrink grow basis-0"
      :key="index"
      v-for="(tab, index) of state.tabs"
      :state="state"
      :tab="tab"
    />
  </div>
</template>
