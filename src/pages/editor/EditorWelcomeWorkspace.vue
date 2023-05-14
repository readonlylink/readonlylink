<script setup lang="ts">
import EditorWelcomeAbout from './EditorWelcomeAbout.vue'
import EditorWelcomeTitle from './EditorWelcomeTitle.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-full flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
  >
    <EditorWelcomeTitle :state="state" />
    <EditorWelcomeAbout :state="state" />
  </div>
</template>
