<script setup lang="ts">
import { FolderIcon } from '@heroicons/vue/24/outline'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeDirectory
}>()
</script>

<template>
  <div
    class="flex shrink-0 items-center space-x-1 overflow-x-auto whitespace-pre px-3 hover:bg-stone-200"
  >
    <FolderIcon class="h-4 w-4" />
    <span>{{ node.directoryHandle.name }}<span class="font-bold">/</span></span>
  </div>
</template>
