<script setup lang="ts">
import {
  DocumentPlusIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { callWithConfirm } from '../../utils/browser/callWithConfirm'
import EditorWorkspaceNode from './EditorWorkspaceNode.vue'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { stateWorkspaceNodeDirectoryLoad } from './stateWorkspaceNodeDirectoryLoad'
import { stateWorkspaceNodeDirectoryRemove } from './stateWorkspaceNodeDirectoryRemove'
import { workspaceNodeIsModified } from './workspaceNodeIsModified'

const lang = useGlobalLang()

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeDirectory
}>()
</script>

<template>
  <div class="flex shrink-0 flex-col overflow-auto">
    <button
      class="flex w-full shrink-0 items-center justify-between space-x-1 overflow-x-auto whitespace-pre pl-3 pr-1 hover:bg-stone-200"
      :class="{
        'text-amber-600': workspaceNodeIsModified(node),
      }"
      @mouseover="node.isHovered = true"
      @mouseleave="node.isHovered = false"
      @click="
        () => {
          if (node.isOpen) {
            node.isOpen = false
          } else {
            node.isOpen = true
            if (!node.isLoaded) {
              stateWorkspaceNodeDirectoryLoad(state, node)
            }
          }
        }
      "
    >
      <div class="flex items-center space-x-1 overflow-auto">
        <FolderOpenIcon v-if="node.isOpen" class="h-5 w-5 shrink-0" />
        <FolderIcon v-else class="h-5 w-5 shrink-0" />
        <span class="overflow-x-auto"
          >{{ node.handle.name }}<span class="font-bold">/</span></span
        >
      </div>

      <div class="flex items-center space-x-1">
        <button
          v-if="node.isHovered"
          @click.stop=""
          :title="lang.isZh() ? '创建文件' : 'Create File'"
        >
          <DocumentPlusIcon class="h-5 w-5" />
        </button>

        <button
          v-if="node.isHovered"
          @click.stop=""
          :title="lang.isZh() ? '创建文件夹' : 'Create Directory'"
        >
          <FolderPlusIcon class="h-5 w-5" />
        </button>

        <button
          v-if="node.isHovered"
          :title="lang.isZh() ? '删除这个文件夹' : 'Remove this directory'"
          @click.stop="
            callWithConfirm(
              () => stateWorkspaceNodeDirectoryRemove(state, node),
              {
                message: lang.isZh()
                  ? `确认要删除这个文件夹吗？\n${node.relativePath}`
                  : `Are you sure to remove this directory?\n${node.relativePath}`,
              },
            )
          "
        >
          <TrashIcon class="h-5 w-5" />
        </button>

        <button
          v-if="workspaceNodeIsModified(node)"
          :title="
            lang.isZh() ? '这个文件夹修改过' : 'This directory is modified'
          "
          class="rounded-full bg-amber-500 p-2"
        ></button>
      </div>
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
