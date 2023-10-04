<script setup lang="ts">
import { FolderIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Scope from '../../components/utils/Scope.vue'
import { State } from './State'
import { stateOpenDirectoryHandle } from './stateDirectoryOpen'
import { stateRemoveRecentlyOpenedDirectory } from './stateRemoveRecentlyOpenedDirectory'

defineProps<{
  state: State
  directoryHandle: FileSystemDirectoryHandle
}>()

const { alert } = window
const lang = useGlobalLang()
</script>

<template>
  <Scope :scope="{ isHovered: false }" v-slot="{ scope }">
    <div
      class="flex max-w-max space-x-2"
      @mouseover="scope.isHovered = true"
      @mouseleave="scope.isHovered = false"
    >
      <button
        :disabled="false && !scope.isHovered"
        :title="lang.isZh() ? '删除这条记录' : 'Remove this record'"
        class="disabled:text-white"
        @click="stateRemoveRecentlyOpenedDirectory(state, directoryHandle.name)"
      >
        <XMarkIcon v-if="scope.isHovered" class="h-5 w-5" />
        <FolderIcon v-else class="h-5 w-5" />
      </button>

      <button
        class="overflow-auto hover:underline"
        @click="
          stateOpenDirectoryHandle(state, directoryHandle).catch((error) => {
            alert(
              lang.isZh()
                ? `打开文件夹失败：${error.message}`
                : `Fail to open directory: ${error.message}`,
            )
          })
        "
      >
        <span class="overflow-x-auto whitespace-pre"
          >{{ directoryHandle.name }}<span class="font-bold">/</span></span
        >
      </button>
    </div>
  </Scope>
</template>
