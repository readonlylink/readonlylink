<script setup lang="ts">
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
        Create
      </button>

      <button class="hover:underline" @click="stateOpenFile(state)">
        Open
      </button>

      <button
        class="hover:underline"
        :disabled="!state.currentTab"
        @click="state.currentTab && tabSave(state.currentTab)"
      >
        Save
      </button>
    </div>

    <div class="flex space-x-4"><EditorToolbarLang :state="state" /></div>
  </div>
</template>
