<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { stateWorkspaceNodeIsCurrentTab } from './stateWorkspaceNodeIsCurrentTab'
import { tabIsModified } from './tabIsModified'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeFile
}>()
</script>

<template>
  <button
    class="flex shrink-0 items-center justify-between space-x-1 overflow-x-auto whitespace-pre pl-3 hover:bg-stone-200"
    :class="{ 'bg-stone-200': stateWorkspaceNodeIsCurrentTab(state, node) }"
    @click="stateWorkspaceNodeFileOpen(state, node)"
  >
    <div class="flex items-center overflow-auto">
      <DocumentTextIcon class="h-4 w-4 shrink-0" />
      <span class="overflow-x-auto">{{ node.handle.name }}</span>
    </div>

    <button
      v-if="node.tab && tabIsModified(node.tab)"
      class="rounded-full bg-stone-400 p-2"
    ></button>
  </button>
</template>
