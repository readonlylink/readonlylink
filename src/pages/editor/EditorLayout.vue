<script setup lang="ts">
import EditorEchoarea from './EditorEchoarea.vue'
import EditorTab from './EditorTab.vue'
import EditorTabbar from './EditorTabbar.vue'
import EditorToolbar from './EditorToolbar.vue'
import EditorWelcome from './EditorWelcome.vue'
import EditorWorkspace from './EditorWorkspace.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="h-screen-dynamic h-screen-dynamic-dynamic flex w-screen flex-col text-xl"
  >
    <div class="flex h-full w-full overflow-auto">
      <div
        v-if="state.currentWorkspace"
        class="flex h-full w-full max-w-[24rem] flex-col overflow-auto"
      >
        <EditorWorkspace :state="state" :workspace="state.currentWorkspace" />
      </div>

      <div class="flex h-full w-full flex-col overflow-auto">
        <EditorTabbar :state="state" />
        <EditorToolbar :state="state" />
        <EditorTab
          v-if="state.currentTab"
          :state="state"
          :tab="state.currentTab"
        />
        <EditorWelcome v-else :state="state" />
      </div>
    </div>

    <EditorEchoarea :state="state" />
  </div>
</template>
