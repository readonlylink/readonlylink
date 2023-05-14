<script setup lang="ts">
import EditorWelcomeAbout from './EditorWelcomeAbout.vue'
import EditorWelcomeRecent from './EditorWelcomeRecent.vue'
import EditorWelcomeStart from './EditorWelcomeStart.vue'
import EditorWelcomeTitle from './EditorWelcomeTitle.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full w-full justify-between overflow-auto">
    <div
      class="flex h-full shrink grow basis-0 flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
    >
      <EditorWelcomeTitle :state="state" />
      <EditorWelcomeStart :state="state" />
      <EditorWelcomeAbout :state="state" />
    </div>

    <div
      class="flex h-full w-full shrink grow basis-0 flex-col overflow-auto p-4 md:p-8"
    >
      <EditorWelcomeRecent :state="state" />
    </div>
  </div>
</template>
