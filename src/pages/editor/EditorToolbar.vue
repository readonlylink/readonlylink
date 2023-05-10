<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import Hyperlink from '../../components/utils/Hyperlink.vue'
import EditorToolbarLang from './EditorToolbarLang.vue'
import { State } from './State'
import { stateCreateFile } from './stateCreateFile'
import { stateOpenFile } from './stateOpenFile'
import { tabSave } from './tabSave'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between bg-stone-200 px-3 py-0.5">
    <div class="flex space-x-4">
      <button class="hover:underline" @click="stateCreateFile(state)">
        <Lang>
          <template #zh>创建</template>
          <template #en>Create</template>
        </Lang>
      </button>

      <button class="hover:underline" @click="stateOpenFile(state)">
        <Lang>
          <template #zh>打开</template>
          <template #en>Open</template>
        </Lang>
      </button>

      <button
        class="hover:underline"
        :disabled="!state.currentTab"
        @click="state.currentTab && tabSave(state.currentTab)"
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
