<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-4 overflow-auto">
    <div
      v-if="Object.keys(state.recentlyOpened.directoryHandles).length > 0"
      class="flex flex-col space-y-4 overflow-auto"
    >
      <Lang class="text-2xl font-bold md:text-3xl">
        <template #zh>最近打开的文件夹</template>
        <template #en>Recently Opened Directories</template>
      </Lang>

      <div class="flex flex-col overflow-y-auto">
        <div
          v-for="(directoryHandle, index) of state.recentlyOpened
            .directoryHandles"
          :key="index"
        >
          <button @click="">
            {{ directoryHandle.name }}
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="Object.keys(state.recentlyOpened.fileHandles).length > 0"
      class="flex flex-col space-y-4 overflow-auto"
    >
      <Lang class="text-2xl font-bold md:text-3xl">
        <template #zh>最近打开的文件</template>
        <template #en>Recently Opened Files</template>
      </Lang>

      <div class="flex flex-col overflow-y-auto">
        <div
          v-for="(fileHandle, index) of state.recentlyOpened.fileHandles"
          :key="index"
        >
          <button @click="stateOpenFileHandle(state, fileHandle)">
            {{ fileHandle.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
