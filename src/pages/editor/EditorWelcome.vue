<script setup lang="ts">
import EditorWelcomeAbout from './EditorWelcomeAbout.vue'
import EditorWelcomeRecent from './EditorWelcomeRecent.vue'
import EditorWelcomeStart from './EditorWelcomeStart.vue'
import EditorWelcomeTitle from './EditorWelcomeTitle.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col overflow-auto md:flex-row md:justify-between"
  >
    <div
      class="flex shrink grow basis-0 flex-col space-y-4 px-6 py-4 md:h-full md:space-y-6 md:overflow-auto md:px-12 md:py-8"
    >
      <EditorWelcomeTitle :state="state" />
      <EditorWelcomeStart :state="state" />
      <EditorWelcomeAbout :state="state" />
    </div>

    <div
      class="flex w-full shrink grow basis-0 flex-col px-6 py-4 md:h-full md:overflow-auto md:px-12 md:py-8"
    >
      <EditorWelcomeRecent :state="state" />
    </div>
  </div>
</template>
