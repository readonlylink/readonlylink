<script setup lang="ts">
import EditorWorkspaceNode from './EditorWorkspaceNode.vue'
import { State } from './State'
import { Workspace } from './Workspace'

defineProps<{
  state: State
  workspace: Workspace
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col overflow-auto border-r border-black">
    <div class="border-b border-black px-3 py-1 font-bold">
      {{ workspace.directoryHandle.name }}
    </div>

    <div class="flex h-full w-full flex-col overflow-x-auto">
      <EditorWorkspaceNode
        v-for="(node, index) of workspace.nodes"
        :key="index"
        :state="state"
        :workspace="workspace"
        :node="node"
      />
    </div>
  </div>
</template>
