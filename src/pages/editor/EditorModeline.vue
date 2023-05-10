<script setup lang="ts">
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div class="flex items-baseline space-x-3 bg-stone-200 px-3">
    <div class="font-bold">{{ tab.file.name }}</div>
    <div>
      <span>{ </span>
      <span>line: </span>
      <span class="font-bold">{{ tab.text.split('\n').length }}</span>
      <span>, </span>
      <span>length: </span>
      <span class="font-bold">{{ tab.text.length }}</span>
      <span> }</span>
    </div>
  </div>
</template>
