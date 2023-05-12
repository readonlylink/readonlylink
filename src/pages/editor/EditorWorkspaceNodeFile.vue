<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeFile
}>()
</script>

<template>
  <button
    class="flex shrink-0 items-center space-x-1 overflow-x-auto whitespace-pre px-3 hover:bg-stone-200"
    @click="stateWorkspaceNodeFileOpen(state, node)"
  >
    <DocumentTextIcon class="h-4 w-4" />
    <span>{{ node.handle.name }}</span>
  </button>
</template>
