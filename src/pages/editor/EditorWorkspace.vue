<script setup lang="ts">
import { State } from './State'
import { Workspace } from './Workspace'
import { workspaceNodeName } from './workspaceNodeName'

defineProps<{
  state: State
  workspace: Workspace
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto pr-3">
    <div class="px-3 py-1 font-bold">{{ workspace.directoryHandle.name }}</div>
    <div
      class="overflow-x-auto whitespace-pre px-3 py-px"
      v-for="(node, index) of workspace.nodes"
      :key="index"
    >
      {{ workspaceNodeName(node) }}
    </div>
  </div>
</template>
