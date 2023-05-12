<script setup lang="ts">
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
  <div class="shrink-0 overflow-x-auto whitespace-pre px-3 hover:bg-stone-200">
    <span>{{ node.directoryHandle.name }}</span>
    <span class="font-bold">/</span>
  </div>
</template>
