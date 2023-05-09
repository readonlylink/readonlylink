<script setup lang="ts">
import EditorEchoarea from './EditorEchoarea.vue'
import EditorMenubar from './EditorMenubar.vue'
import EditorTab from './EditorTab.vue'
import EditorToolbar from './EditorToolbar.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <EditorMenubar :state="state" />
    <EditorToolbar :state="state" />
    <EditorTab :state="state" />
    <EditorEchoarea :state="state" />
  </div>
</template>
