<script setup lang="ts">
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <textarea
    class="h-full w-full resize-none font-mono"
    spellcheck="false"
    v-model="tab.text"
  />
</template>
