<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import EditorWelcomeRecentDirectory from './EditorWelcomeRecentDirectory.vue'
import EditorWelcomeRecentFile from './EditorWelcomeRecentFile.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-4 overflow-auto sm:space-y-6">
    <div
      v-if="
        Object.keys(state.recentlyOpened.directoryHandles).length === 0 &&
        Object.keys(state.recentlyOpened.fileHandles).length === 0
      "
      class="flex flex-col space-y-4 overflow-hidden"
    >
      <Lang class="max-w-lg text-xl font-bold text-stone-400 sm:text-2xl">
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
      <Lang class="text-2xl font-bold sm:text-3xl">
        <template #zh>最近打开的文件夹</template>
        <template #en>Recently Opened Directories</template>
      </Lang>

      <div class="flex flex-col overflow-y-auto">
        <EditorWelcomeRecentDirectory
          v-for="(directoryHandle, index) of state.recentlyOpened
            .directoryHandles"
          :key="index"
          :state="state"
          :directoryHandle="directoryHandle"
        />
      </div>
    </div>

    <div
      v-if="Object.keys(state.recentlyOpened.fileHandles).length > 0"
      class="flex flex-col space-y-4 overflow-auto"
    >
      <Lang class="text-2xl font-bold sm:text-3xl">
        <template #zh>最近打开的文件</template>
        <template #en>Recently Opened Files</template>
      </Lang>

      <div class="flex flex-col overflow-y-auto">
        <EditorWelcomeRecentFile
          v-for="(fileHandle, index) of state.recentlyOpened.fileHandles"
          :key="index"
          :state="state"
          :fileHandle="fileHandle"
        />
      </div>
    </div>
  </div>
</template>
