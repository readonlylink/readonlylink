<script setup lang="ts">
import {
  DocumentPlusIcon,
  EyeIcon,
  EyeSlashIcon,
  FolderPlusIcon,
} from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { arrayFromAsyncIterable } from '../../utils/arrayFromAsyncIterable'
import { callWithPrompt } from '../../utils/browser/callWithPrompt'
import { State } from './State'
import { Workspace } from './Workspace'
import { stateWorkspaceNodeDirectoryCreate } from './stateWorkspaceNodeDirectoryCreate'
import { stateWorkspaceNodeFileCreate } from './stateWorkspaceNodeFileCreate'

defineProps<{
  state: State
  workspace: Workspace
}>()

const lang = useGlobalLang()
const { alert } = window
</script>

<template>
  <div class="flex justify-between space-x-2 py-1 pl-3 pr-1">
    <div class="font-bold">{{ workspace.root.handle.name }}</div>
    <div class="flex space-x-1">
      <button
        :title="
          lang.isZh()
            ? '是否显示以「.」开头的隐藏文件'
            : `Show hidden files (start with a dot '.') or not`
        "
        @click.stop="state.showDotFiles = !state.showDotFiles"
      >
        <EyeIcon v-if="state.showDotFiles" class="h-5 w-5" />
        <EyeSlashIcon v-else class="h-5 w-5" />
      </button>

      <button
        :title="lang.isZh() ? '创建文件' : 'Create file'"
        @click.stop="
          callWithPrompt({
            message: lang.isZh()
              ? `创建文件\n${workspace.root.handle.name}:`
              : `Create file\n${workspace.root.handle.name}:`,
            action: async (name) => {
              if (
                (
                  await arrayFromAsyncIterable(workspace.root.handle.keys())
                ).includes(name)
              ) {
                alert(
                  lang.isZh()
                    ? `文件或文件夹已经存在：${name}:`
                    : `File or directory alreay exists: ${name}`,
                )
              } else {
                await stateWorkspaceNodeFileCreate(state, workspace.root, name)
              }
            },
          })
        "
      >
        <DocumentPlusIcon class="h-5 w-5" />
      </button>

      <button
        :title="lang.isZh() ? '创建文件夹' : 'Create directory'"
        @click.stop="
          callWithPrompt({
            message: lang.isZh()
              ? `创建文件夹\n${workspace.root.handle.name}:`
              : `Create directory\n${workspace.root.handle.name}:`,
            action: async (name) => {
              if (
                (
                  await arrayFromAsyncIterable(workspace.root.handle.keys())
                ).includes(name)
              ) {
                alert(
                  lang.isZh()
                    ? `文件或文件夹已经存在：${name}:`
                    : `File or directory alreay exists: ${name}`,
                )
              } else {
                await stateWorkspaceNodeDirectoryCreate(
                  state,
                  workspace.root,
                  name,
                )
              }
            },
          })
        "
      >
        <FolderPlusIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>
