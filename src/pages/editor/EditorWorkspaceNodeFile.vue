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
  <div class="overflow-x-auto whitespace-pre px-3 py-px">
    <span>{{ node.fileHandle.name }}</span>
  </div>
</template>
