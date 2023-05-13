<script setup lang="ts">
import { DocumentTextIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { stateWorkspaceNodeIsCurrentTab } from './stateWorkspaceNodeIsCurrentTab'
import { workspaceNodeIsModified } from './workspaceNodeIsModified'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeFile
}>()
</script>

<template>
  <button
    class="flex shrink-0 items-center justify-between space-x-1 overflow-x-auto whitespace-pre pl-3 pr-1 hover:bg-stone-200"
    :class="{ 'bg-stone-200': stateWorkspaceNodeIsCurrentTab(state, node) }"
    @click="stateWorkspaceNodeFileOpen(state, node)"
  >
    <div class="flex items-center space-x-1 overflow-auto">
      <DocumentTextIcon class="h-4 w-4 shrink-0" />
      <span class="overflow-x-auto">{{ node.handle.name }}</span>
    </div>

    <div class="flex items-center space-x-1">
      <button v-if="stateWorkspaceNodeIsCurrentTab(state, node)">
        <TrashIcon class="h-4 w-4" />
      </button>

      <button
        v-if="workspaceNodeIsModified(node)"
        class="rounded-full bg-stone-400 p-2"
      ></button>
    </div>
  </button>
</template>
