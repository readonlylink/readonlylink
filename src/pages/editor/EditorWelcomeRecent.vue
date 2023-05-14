<script setup lang="ts">
import { State } from './State'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-full shrink grow basis-0 flex-col space-y-4 overflow-auto md:space-y-6"
  >
    <div
      v-for="(fileHandle, index) of state.recentlyOpened.fileHandles"
      :key="index"
    >
      <button @click="stateOpenFileHandle(state, fileHandle)">
        {{ fileHandle.name }}
      </button>
    </div>
  </div>
</template>
