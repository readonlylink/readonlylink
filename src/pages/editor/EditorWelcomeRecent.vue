<script setup lang="ts">
import { DocumentTextIcon, FolderIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'
import { stateOpenDirectoryHandle } from './stateDirectoryOpen'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-4 overflow-auto md:space-y-6">
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
          <button
            class="flex items-center space-x-1 hover:underline"
            @click="stateOpenDirectoryHandle(state, directoryHandle)"
          >
            <FolderIcon class="h-5 w-5" />
            <span
              >{{ directoryHandle.name }}<span class="font-bold">/</span></span
            >
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
          <button
            class="flex items-center space-x-1 hover:underline"
            @click="stateOpenFileHandle(state, fileHandle)"
          >
            <DocumentTextIcon class="h-5 w-5" />
            <span>{{ fileHandle.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
