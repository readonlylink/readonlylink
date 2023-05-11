<script setup lang="ts">
import EditorLinenumber from './EditorLinenumber.vue'
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
  <div class="flex h-full flex-col overflow-auto">
    <div class="flex h-full w-full overflow-auto">
      <EditorLinenumber :state="state" :tab="tab" />
      <EditorTextarea :state="state" :tab="tab" />
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
