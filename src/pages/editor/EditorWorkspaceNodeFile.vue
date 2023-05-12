<script setup lang="ts">
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
  <div class="shrink-0 overflow-x-auto whitespace-pre px-3 hover:bg-stone-200">
    <span>{{ node.fileHandle.name }}</span>
  </div>
</template>
