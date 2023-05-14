<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import EditorWelcomeAbout from './EditorWelcomeAbout.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex h-full flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
  >
    <Lang class="text-2xl text-stone-500 md:text-3xl">
      <template #zh>
        <span>欢迎使用</span>
        <br class="block md:hidden" />
        <span><b>只读编辑器</b></span>
      </template>
      <template #en>
        <span> Welcome to use </span>
        <br class="block md:hidden" />
        <span><b> Readonly Editor </b></span>
      </template>
    </Lang>

    <EditorWelcomeAbout :state="state" />
  </div>
</template>
