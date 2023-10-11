<script setup lang="ts">
import {
  DocumentPlusIcon,
  DocumentTextIcon,
  FolderIcon,
} from '@heroicons/vue/24/outline'
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'
import { stateDirectoryOpen } from './stateDirectoryOpen'
import { stateFileCreate } from './stateFileCreate'
import { stateFileOpen } from './stateFileOpen'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <Lang class="text-2xl font-bold sm:text-3xl">
      <template #zh>开始</template>
      <template #en>Start</template>
    </Lang>

    <div class="flex flex-col items-start space-y-2 text-xl sm:text-2xl">
      <button
        class="flex space-x-2 whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        @click="stateDirectoryOpen(state)"
      >
        <FolderIcon class="h-7 w-7" />
        <Lang>
          <template #zh>打开文件夹</template>
          <template #en>Open Directory</template>
        </Lang>
      </button>

      <button
        class="flex space-x-2 whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        @click="stateFileOpen(state)"
      >
        <DocumentTextIcon class="h-7 w-7" />
        <Lang>
          <template #zh>打开文件</template>
          <template #en>Open File</template>
        </Lang>
      </button>

      <button
        class="flex space-x-2 whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline disabled:dark:text-stone-400"
        @click="stateFileCreate(state)"
      >
        <DocumentPlusIcon class="h-7 w-7" />
        <Lang>
          <template #zh>创建文件</template>
          <template #en>Create File</template>
        </Lang>
      </button>
    </div>
  </div>
</template>
