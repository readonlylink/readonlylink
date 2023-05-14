<script setup lang="ts">
import { FolderIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Scope from '../../components/utils/Scope.vue'
import { useWindow } from '../../reactives/useWindow'
import { State } from './State'
import { stateOpenDirectoryHandle } from './stateDirectoryOpen'

defineProps<{
  state: State
  directoryHandle: FileSystemDirectoryHandle
}>()

const window = useWindow()
const lang = useGlobalLang()
</script>

<template>
  <Scope :scope="{ errorMessage: undefined }" v-slot="{ scope }">
    <button
      class="flex items-center space-x-1 hover:underline"
      :class="{ 'text-red-600': scope.errorMessage }"
      @click="
        stateOpenDirectoryHandle(state, directoryHandle).catch((error) => {
          window.alert(
            lang.isZh()
              ? `打开文件夹失败：${error.message}`
              : `Fail to open directory: ${error.message}`,
          )
          scope.errorMessage = error.message
        })
      "
    >
      <FolderIcon class="h-5 w-5" />
      <span>{{ directoryHandle.name }}<span class="font-bold">/</span></span>
    </button>
  </Scope>
</template>
