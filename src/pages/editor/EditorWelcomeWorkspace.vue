<script setup lang="ts">
import EditorWelcomeAbout from './EditorWelcomeAbout.vue'
import EditorWelcomeTitle from './EditorWelcomeTitle.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-full flex-col space-y-4 overflow-auto p-4 sm:space-y-6 sm:p-8"
  >
    <EditorWelcomeTitle :state="state" />
    <EditorWelcomeAbout :state="state" />
  </div>
</template>
