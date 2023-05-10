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
    class="h-full w-full resize-none px-3 py-2 font-mono caret-red-500 focus:outline-none"
    spellcheck="false"
    v-model="tab.text"
  />
</template>
