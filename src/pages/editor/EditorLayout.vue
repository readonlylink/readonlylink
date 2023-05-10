<script setup lang="ts">
import EditorEchoarea from './EditorEchoarea.vue'
import EditorHelp from './EditorHelp.vue'
import EditorMenubar from './EditorMenubar.vue'
import EditorTab from './EditorTab.vue'
import EditorTabbar from './EditorTabbar.vue'
import EditorToolbar from './EditorToolbar.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-screen w-screen flex-col text-xl">
    <EditorMenubar :state="state" />
    <EditorTabbar :state="state" />
    <EditorToolbar :state="state" />
    <EditorTab v-if="state.currentTab" :state="state" :tab="state.currentTab" />
    <EditorHelp v-else :state="state" />
    <EditorEchoarea :state="state" />
  </div>
</template>
