<script setup lang="ts">
import { State } from './State'
import { Tab } from './Tab'
import { tabIsModified } from './tabIsModified'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div
    class="flex items-baseline space-x-3 overflow-x-auto overflow-y-clip whitespace-pre bg-stone-200 px-3 dark:bg-stone-600"
  >
    <div class="font-bold">{{ tab.node?.relativePath || tab.file.name }}</div>
    <div>
      <span>{ </span>
      <span>line: </span>
      <span class="font-bold">{{ tab.text.split('\n').length }}</span>

      <span>, </span>
      <span>length: </span>
      <span class="font-bold">{{ tab.text.length }}</span>

      <template v-if="tabIsModified(tab)">
        <span>, </span>
        <span>isModified: </span>
        <span class="font-bold">true</span>
      </template>

      <span> }</span>
    </div>
  </div>
</template>
