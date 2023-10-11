<script setup lang="ts">
import { DocumentTextIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { callWithConfirm } from '../../utils/browser/callWithConfirm'
import { State } from './State'
import { Workspace } from './Workspace'
import { WorkspaceNodeFile } from './WorkspaceNode'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { stateWorkspaceNodeFileRemove } from './stateWorkspaceNodeFileRemove'
import { stateWorkspaceNodeIsCurrentTab } from './stateWorkspaceNodeIsCurrentTab'
import { workspaceNodeFileRemoveIsSupported } from './workspaceNodeFileRemoveIsSupported'
import { workspaceNodeIsModified } from './workspaceNodeIsModified'

defineProps<{
  state: State
  workspace: Workspace
  node: WorkspaceNodeFile
}>()

const lang = useGlobalLang()
</script>

<template>
  <button
    class="flex shrink-0 items-center justify-between space-x-1 overflow-x-auto whitespace-pre pl-3 pr-1 hover:bg-stone-200 hover:dark:bg-stone-600"
    :class="{
      'bg-stone-200 dark:bg-stone-600': stateWorkspaceNodeIsCurrentTab(
        state,
        node,
      ),
      'text-amber-600 dark:text-amber-400': workspaceNodeIsModified(node),
    }"
    @mouseover="node.isHovered = true"
    @mouseleave="node.isHovered = false"
    @click="stateWorkspaceNodeFileOpen(state, node)"
  >
    <div class="flex items-center space-x-1 overflow-auto">
      <DocumentTextIcon class="h-5 w-5 shrink-0" />
      <span class="overflow-x-auto">{{ node.handle.name }}</span>
    </div>

    <div class="flex items-center space-x-1">
      <button
        v-if="node.isHovered && workspaceNodeFileRemoveIsSupported(node)"
        :title="lang.isZh() ? '删除这个文件' : 'Remove this file'"
        @click.stop="
          callWithConfirm({
            message: lang.isZh()
              ? `确认要删除这个文件吗？\n${node.relativePath}`
              : `Are you sure to remove this file?\n${node.relativePath}`,
            action: () => stateWorkspaceNodeFileRemove(state, node),
          })
        "
      >
        <TrashIcon class="h-5 w-5" />
      </button>

      <button
        v-if="workspaceNodeIsModified(node)"
        :title="lang.isZh() ? '这个文件修改过' : 'This file is modified'"
        class="rounded-full bg-amber-500 p-2 dark:bg-amber-300"
      ></button>
    </div>
  </button>
</template>
