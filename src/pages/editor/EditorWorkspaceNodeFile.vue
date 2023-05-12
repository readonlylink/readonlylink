<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeFile } from './WorkspaceNode'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeFile
}>()
</script>

<template>
  <div
    class="flex shrink-0 items-center space-x-1 overflow-x-auto whitespace-pre px-3 hover:bg-stone-200"
  >
    <DocumentTextIcon class="h-4 w-4" />
    <span>{{ node.fileHandle.name }}</span>
  </div>
</template>
