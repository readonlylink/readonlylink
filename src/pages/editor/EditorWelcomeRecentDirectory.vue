<script setup lang="ts">
import { FolderIcon } from '@heroicons/vue/24/outline'
import { useWindow } from '../../reactives/useWindow'
import { State } from './State'
import { stateOpenDirectoryHandle } from './stateDirectoryOpen'

defineProps<{
  state: State
  directoryHandle: FileSystemDirectoryHandle
}>()

const window = useWindow()
</script>

<template>
  <div>
    <button
      class="flex items-center space-x-1 hover:underline"
      @click="
        stateOpenDirectoryHandle(state, directoryHandle).catch((error) =>
          window.alert(error.message),
        )
      "
    >
      <FolderIcon class="h-5 w-5" />
      <span>{{ directoryHandle.name }}<span class="font-bold">/</span></span>
    </button>
  </div>
</template>
