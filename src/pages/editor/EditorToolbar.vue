<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import EditorToolbarLang from './EditorToolbarLang.vue'
import { State } from './State'
import { stateDirectoryOpen } from './stateDirectoryOpen'
import { stateFileCreate } from './stateFileCreate'
import { stateFileOpen } from './stateFileOpen'
import { tabIsModified } from './tabIsModified'
import { tabSave } from './tabSave'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-between space-x-4 bg-stone-200 px-3 py-0.5"
  >
    <div class="flex space-x-4 overflow-x-auto">
      <button
        class="whitespace-pre hover:underline"
        @click="stateFileCreate(state)"
      >
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </button>

      <button
        class="whitespace-pre hover:underline"
        @click="stateFileOpen(state)"
      >
        <Lang>
          <template #zh>打开</template>
          <template #en>Open</template>
        </Lang>
      </button>

      <button
        class="whitespace-pre hover:underline"
        @click="stateDirectoryOpen(state)"
      >
        <Lang>
          <template #zh>打开文件夹</template>
          <template #en>Open Directory</template>
        </Lang>
      </button>

      <button
        class="whitespace-pre hover:underline disabled:text-stone-500 disabled:no-underline"
        :disabled="!state.currentTab || !tabIsModified(state.currentTab)"
        @click="state.currentTab && tabSave(state.currentTab, state)"
      >
        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </button>
    </div>

    <div class="flex grow justify-end space-x-4">
      <Hyperlink
        class="whitespace-pre hover:underline"
        href="/"
        target="_blank"
      >
        <Lang>
          <template #zh>主页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <EditorToolbarLang class="z-20" :state="state" />
    </div>
  </div>
</template>
