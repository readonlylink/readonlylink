<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import EditorWelcomeAbout from './EditorWelcomeAbout.vue'
import EditorWelcomeRecent from './EditorWelcomeRecent.vue'
import EditorWelcomeStart from './EditorWelcomeStart.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full w-full justify-between overflow-auto">
    <div
      class="flex h-full shrink grow basis-0 flex-col space-y-4 overflow-auto p-4 md:space-y-6 md:p-8"
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

      <EditorWelcomeStart :state="state" />
      <EditorWelcomeAbout :state="state" />
    </div>

    <div
      class="flex h-full w-full shrink grow basis-0 flex-col overflow-auto p-4 md:p-8"
    >
      <EditorWelcomeRecent :state="state" />
    </div>
  </div>
</template>
