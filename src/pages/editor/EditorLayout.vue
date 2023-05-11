<script setup lang="ts">
import EditorEchoarea from './EditorEchoarea.vue'
import EditorTab from './EditorTab.vue'
import EditorTabbar from './EditorTabbar.vue'
import EditorToolbar from './EditorToolbar.vue'
import EditorWelcome from './EditorWelcome.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-screen w-screen flex-col text-xl">
    <EditorTabbar :state="state" />
    <EditorToolbar :state="state" />
    <EditorTab v-if="state.currentTab" :state="state" :tab="state.currentTab" />
    <EditorWelcome v-else :state="state" />
    <EditorEchoarea :state="state" />
  </div>
</template>
