<script setup lang="ts">
import { FolderIcon, FolderOpenIcon } from '@heroicons/vue/24/outline'
import EditorWorkspaceNode from './EditorWorkspaceNode.vue'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { stateWorkspaceNodeDirectoryOpen } from './stateWorkspaceNodeDirectoryOpen'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeDirectory
}>()
</script>

<template>
  <div class="flex shrink-0 flex-col overflow-auto">
    <button
      class="flex w-full shrink-0 items-center space-x-1 overflow-x-auto whitespace-pre pl-3 hover:bg-stone-200"
      @click="
        () => {
          if (node.isOpen) {
            node.isOpen = false
          } else {
            stateWorkspaceNodeDirectoryOpen(state, node)
          }
        }
      "
    >
      <FolderOpenIcon v-if="node.isOpen" class="h-4 w-4 shrink-0" />
      <FolderIcon v-else class="h-4 w-4 shrink-0" />
      <span class="overflow-x-auto"
        >{{ node.handle.name }}<span class="font-bold">/</span></span
      >
    </button>

    <div
      v-if="node.isOpen && node.children.length > 0"
      class="flex h-full flex-col pl-3"
    >
      <EditorWorkspaceNode
        class="border-l border-black"
        v-for="(child, index) of node.children"
        :key="index"
        :state="state"
        :workspace="workspace"
        :node="child"
      />
    </div>
  </div>
</template>
