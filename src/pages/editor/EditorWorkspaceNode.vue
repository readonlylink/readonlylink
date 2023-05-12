<script setup lang="ts">
import EditorWorkspaceNodeDirectory from './EditorWorkspaceNodeDirectory.vue'
import EditorWorkspaceNodeFile from './EditorWorkspaceNodeFile.vue'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNode } from './WorkspaceNode'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNode
}>()
</script>

<template>
  <EditorWorkspaceNodeFile
    v-if="node.kind === 'WorkspaceNodeFile'"
    :state="state"
    :workspace="workspace"
    :node="node"
  />

  <EditorWorkspaceNodeDirectory
    v-else-if="node.kind === 'WorkspaceNodeDirectory'"
    :state="state"
    :workspace="workspace"
    :node="node"
  />
</template>
