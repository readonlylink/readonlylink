<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex">
    <div class="px-3 py-0.5 font-logo">
      <Lang>
        <template #zh>只读文本编辑器</template>
        <template #en>Readonly Text Editor</template>
      </Lang>
    </div>

    <div
      v-for="(tab, index) of state.tabs"
      :key="index"
      class="px-3 py-0.5"
      :class="{
        'bg-stone-200': tab === state.currentTab,
        'bg-white hover:bg-stone-100': tab !== state.currentTab,
      }"
    >
      <button @click="state.currentTab = tab">
        {{ tab.file.name }}
      </button>
    </div>
  </div>
</template>
