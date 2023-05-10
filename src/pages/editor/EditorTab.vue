<script setup lang="ts">
import EditorModeline from './EditorModeline.vue'
import EditorTextarea from './EditorTextarea.vue'
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div class="flex h-full flex-col">
    <EditorTextarea :state="state" :tab="tab" />
    <EditorModeline :state="state" />
  </div>
</template>
