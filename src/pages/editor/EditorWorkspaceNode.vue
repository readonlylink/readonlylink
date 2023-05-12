<script setup lang="ts">
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNode } from './WorkspaceNode'
import { workspaceNodeName } from './workspaceNodeName'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNode
}>()
</script>

<template>
  <div class="overflow-x-auto whitespace-pre px-3 py-px">
    {{ workspaceNodeName(node) }}
  </div>
</template>
