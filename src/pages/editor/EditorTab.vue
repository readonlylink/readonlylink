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
      <EditorLinenumber :state :tab />
      <EditorTextarea :state :tab />
    </div>

    <EditorModeline :state :tab />
  </div>
</template>
