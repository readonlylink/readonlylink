<script setup lang="ts">
import { DocumentPlusIcon, FolderPlusIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { State } from './State'
import { Workspace } from './Workspace'

defineProps<{
  state: State
  workspace: Workspace
}>()

const lang = useGlobalLang()
</script>

<template>
  <div class="flex justify-between space-x-2 py-1 pl-3 pr-1">
    <div class="font-bold">{{ workspace.root.handle.name }}</div>
    <div class="flex space-x-1">
      <button @click.stop="" :title="lang.isZh() ? '创建文件' : 'Create File'">
        <DocumentPlusIcon class="h-5 w-5" />
      </button>

      <button
        @click.stop=""
        :title="lang.isZh() ? '创建文件夹' : 'Create Directory'"
      >
        <FolderPlusIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>