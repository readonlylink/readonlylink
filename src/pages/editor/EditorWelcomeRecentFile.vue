<script setup lang="ts">
import { DocumentTextIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Scope from '../../components/utils/Scope.vue'
import { State } from './State'
import { stateOpenFileHandle } from './stateFileOpen'
import { stateRemoveRecentlyOpenedFile } from './stateRemoveRecentlyOpenedFile'

defineProps<{
  state: State
  fileHandle: FileSystemFileHandle
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
        @click="stateRemoveRecentlyOpenedFile(state, fileHandle.name)"
      >
        <XMarkIcon v-if="scope.isHovered" class="h-5 w-5" />
        <DocumentTextIcon v-else class="h-5 w-5" />
      </button>

      <button
        class="overflow-auto hover:underline"
        @click="
          stateOpenFileHandle(state, fileHandle).catch((error) => {
            alert(
              lang.isZh()
                ? `打开文件失败：${error.message}`
                : `Fail to open file: ${error.message}`,
            )
          })
        "
      >
        <span class="overflow-x-auto whitespace-pre">{{
          fileHandle.name
        }}</span>
      </button>
    </div>
  </Scope>
</template>
