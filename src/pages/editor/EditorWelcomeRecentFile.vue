<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import Scope from '../../components/utils/Scope.vue'
import { useWindow } from '../../reactives/useWindow'
import { State } from './State'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{
  state: State
  fileHandle: FileSystemFileHandle
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
        stateOpenFileHandle(state, fileHandle).catch((error) => {
          window.alert(
            lang.isZh()
              ? `打开文件失败：${error.message}`
              : `Fail to open file: ${error.message}`,
          )
          scope.errorMessage = error.message
        })
      "
    >
      <DocumentTextIcon class="h-5 w-5" />
      <span>{{ fileHandle.name }}</span>
    </button>
  </Scope>
</template>
