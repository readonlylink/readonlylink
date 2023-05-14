<script setup lang="ts">
import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { useWindow } from '../../reactives/useWindow'
import { State } from './State'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{
  state: State
  fileHandle: FileSystemFileHandle
}>()

const window = useWindow()
</script>

<template>
  <div>
    <button
      class="flex items-center space-x-1 hover:underline"
      @click="
        stateOpenFileHandle(state, fileHandle).catch((error) =>
          window.alert(error.message),
        )
      "
    >
      <DocumentTextIcon class="h-5 w-5" />
      <span>{{ fileHandle.name }}</span>
    </button>
  </div>
</template>
