<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import EditorTabbarTab from './EditorTabbarTab.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="scrollbar-h-0 flex items-center overflow-x-auto overflow-y-hidden"
  >
    <div class="whitespace-pre px-3 py-1 font-logo">
      <Lang>
        <template #zh>只读编辑器</template>
        <template #en>Readonly Editor</template>
      </Lang>
    </div>

    <EditorTabbarTab
      :key="index"
      v-for="(tab, index) of state.tabs"
      :state="state"
      :tab="tab"
    />
  </div>
</template>
