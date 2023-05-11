<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import EditorToolbarLang from './EditorToolbarLang.vue'
import { State } from './State'
import { stateFileCreate } from './stateFileCreate'
import { stateFileOpen } from './stateFileOpen'
import { tabIsModified } from './tabIsModified'
import { tabSave } from './tabSave'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between bg-stone-200 px-3 py-0.5">
    <div class="flex space-x-4">
      <button class="hover:underline" @click="stateFileCreate(state)">
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </button>

      <button class="hover:underline" @click="stateFileOpen(state)">
        <Lang>
          <template #zh>打开</template>
          <template #en>Open</template>
        </Lang>
      </button>

      <button
        class="hover:underline disabled:text-stone-500"
        :disabled="!state.currentTab || !tabIsModified(state.currentTab)"
        @click="state.currentTab && tabSave(state.currentTab, state)"
      >
        <Lang>
          <template #zh>保存</template>
          <template #en>Save</template>
        </Lang>
      </button>
    </div>

    <div class="flex space-x-4">
      <Hyperlink class="hover:underline" href="/" target="_blank">
        <Lang>
          <template #zh>主页</template>
          <template #en>Home</template>
        </Lang>
      </Hyperlink>

      <EditorToolbarLang :state="state" />
    </div>
  </div>
</template>
