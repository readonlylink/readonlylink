<script setup lang="ts">
import EditorWorkspaceNode from './EditorWorkspaceNode.vue'
import EditorWorkspaceRoot from './EditorWorkspaceRoot.vue'
import { State } from './State'
import { Workspace } from './Workspace'
import { stateWorkspaceFilterNodes } from './stateWorkspaceFilterNodes'

defineProps<{
  state: State
  workspace: Workspace
}>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col overflow-auto border-r border-black dark:border-white"
  >
    <EditorWorkspaceRoot
      class="border-b border-black dark:border-white"
      :state="state"
      :workspace="workspace"
    />

    <div class="flex h-full w-full flex-col overflow-x-auto">
      <EditorWorkspaceNode
        v-for="(node, index) of stateWorkspaceFilterNodes(
          state,
          workspace.root.children,
        )"
        :key="index"
        :state="state"
        :workspace="workspace"
        :node="node"
      />
    </div>
  </div>
</template>
