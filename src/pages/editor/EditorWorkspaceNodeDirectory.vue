<script setup lang="ts">
import {
  DocumentPlusIcon,
  FolderIcon,
  FolderOpenIcon,
  FolderPlusIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { callWithConfirm } from '../../utils/browser/callWithConfirm'
import { callWithPrompt } from '../../utils/browser/callWithPrompt'
import EditorWorkspaceNode from './EditorWorkspaceNode.vue'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeDirectory } from './WorkspaceNode'
import { stateWorkspaceFilterNodes } from './stateWorkspaceFilterNodes'
import { stateWorkspaceNodeDirectoryCreate } from './stateWorkspaceNodeDirectoryCreate'
import { stateWorkspaceNodeDirectoryLoad } from './stateWorkspaceNodeDirectoryLoad'
import { stateWorkspaceNodeDirectoryRemove } from './stateWorkspaceNodeDirectoryRemove'
import { stateWorkspaceNodeFileCreate } from './stateWorkspaceNodeFileCreate'
import { workspaceNodeIsModified } from './workspaceNodeIsModified'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeDirectory
}>()

const lang = useGlobalLang()
const { alert } = window
</script>

<template>
  <div class="flex shrink-0 flex-col overflow-auto">
    <button
      class="flex w-full shrink-0 items-center justify-between space-x-1 overflow-x-auto whitespace-pre pl-3 pr-1 hover:bg-stone-200 hover:dark:bg-stone-600"
      :class="{
        'text-amber-600 dark:text-amber-400': workspaceNodeIsModified(node),
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
          :title="lang.isZh() ? '创建文件' : 'Create file'"
          @click.stop="
            callWithPrompt({
              message: lang.isZh()
                ? `创建文件\n${node.relativePath}:`
                : `Create file\n${node.relativePath}:`,
              action: async (name) => {
                if (
                  (await arrayFromAsyncIterable(node.handle.keys())).includes(
                    name,
                  )
                ) {
                  alert(
                    lang.isZh()
                      ? `文件或文件夹已经存在：${name}:`
                      : `File or directory alreay exists: ${name}`,
                  )
                } else {
                  await stateWorkspaceNodeFileCreate(state, node, name)
                }
              },
            })
          "
        >
          <DocumentPlusIcon class="h-5 w-5" />
        </button>

        <button
          v-if="node.isHovered"
          :title="lang.isZh() ? '创建文件夹' : 'Create directory'"
          @click.stop="
            callWithPrompt({
              message: lang.isZh()
                ? `创建文件夹\n${node.relativePath}:`
                : `Create directory\n${node.relativePath}:`,
              action: async (name) => {
                if (
                  (await arrayFromAsyncIterable(node.handle.keys())).includes(
                    name,
                  )
                ) {
                  alert(
                    lang.isZh()
                      ? `文件或文件夹已经存在：${name}:`
                      : `File or directory alreay exists: ${name}`,
                  )
                } else {
                  await stateWorkspaceNodeDirectoryCreate(state, node, name)
                }
              },
            })
          "
        >
          <FolderPlusIcon class="h-5 w-5" />
        </button>

        <button
          v-if="node.isHovered"
          :title="lang.isZh() ? '删除这个文件夹' : 'Remove this directory'"
          @click.stop="
            callWithConfirm({
              message: lang.isZh()
                ? `确认要删除这个文件夹吗？\n${node.relativePath}`
                : `Are you sure to remove this directory?\n${node.relativePath}`,
              action: () => stateWorkspaceNodeDirectoryRemove(state, node),
            })
          "
        >
          <TrashIcon class="h-5 w-5" />
        </button>

        <button
          v-if="workspaceNodeIsModified(node)"
          :title="
            lang.isZh() ? '这个文件夹修改过' : 'This directory is modified'
          "
          class="rounded-full bg-amber-500 p-2 dark:bg-amber-300"
        ></button>
      </div>
    </button>

    <div
      v-if="node.isOpen && node.children.length > 0"
      class="flex h-full flex-col pl-3"
    >
      <EditorWorkspaceNode
        class="border-l border-black dark:border-white"
        v-for="(child, index) of stateWorkspaceFilterNodes(
          state,
          node.children,
        )"
        :key="index"
        :state="state"
        :workspace="workspace"
        :node="child"
      />
    </div>
  </div>
</template>
