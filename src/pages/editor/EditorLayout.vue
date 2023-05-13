<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { Pane, Splitpanes } from 'splitpanes'
import EditorEchoarea from './EditorEchoarea.vue'
import EditorTab from './EditorTab.vue'
import EditorTabbar from './EditorTabbar.vue'
import EditorToolbar from './EditorToolbar.vue'
import EditorWelcome from './EditorWelcome.vue'
import EditorWelcomeWorkspace from './EditorWelcomeWorkspace.vue'
import EditorWorkspace from './EditorWorkspace.vue'
import { State } from './State'

defineProps<{ state: State }>()

const splitpanesSize = useLocalStorage('ManagerLayout.splitpanesSize', 24)
</script>

<template>
  <div
    class="h-screen-dynamic h-screen-dynamic-dynamic flex w-screen flex-col text-xl"
  >
    <Splitpanes
      class="splitter-6 md:splitter-3 flex h-full w-full overflow-auto"
      @resized="splitpanesSize = $event[0].size"
    >
      <Pane
        v-if="state.currentWorkspace"
        class="flex h-full w-full flex-col overflow-auto"
        min-size="8"
        :size="splitpanesSize"
      >
        <EditorWorkspace :state="state" :workspace="state.currentWorkspace" />
      </Pane>

      <Pane class="flex h-full w-full flex-col overflow-auto">
        <EditorTabbar :state="state" />
        <EditorToolbar :state="state" />
        <EditorTab
          v-if="state.currentTab"
          :state="state"
          :tab="state.currentTab"
        />
        <EditorWelcomeWorkspace
          v-else-if="state.currentWorkspace"
          :state="state"
        />
        <EditorWelcome v-else :state="state" />
      </Pane>
    </Splitpanes>

    <EditorEchoarea :state="state" />
  </div>
</template>
