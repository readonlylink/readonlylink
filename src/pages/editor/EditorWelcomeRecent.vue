<script setup lang="ts">
import { DocumentTextIcon, FolderIcon } from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { useWindow } from '../../reactives/useWindow'
import { State } from './State'
import { stateOpenDirectoryHandle } from './stateDirectoryOpen'
import { stateOpenFileHandle } from './stateFileOpen'

defineProps<{ state: State }>()

const window = useWindow()
</script>

<template>
  <div class="flex flex-col space-y-4 overflow-auto md:space-y-6">
    <div
      v-if="
        Object.keys(state.recentlyOpened.directoryHandles).length === 0 &&
        Object.keys(state.recentlyOpened.fileHandles).length === 0
      "
      class="flex flex-col space-y-4 overflow-auto"
    >
      <Lang class="max-w-lg text-xl font-bold text-stone-400 md:text-2xl">
        <template #zh>
          <div>最近打开的文件和文件夹，将出现在这里。</div>
        </template>
        <template #en>
          <div>Recently opened files and directories will be listed here.</div>
        </template>
      </Lang>
    </div>

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
            @click="
              stateOpenDirectoryHandle(state, directoryHandle).catch((error) =>
                window.alert(error.message),
              )
            "
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
      </div>
    </div>
  </div>
</template>
