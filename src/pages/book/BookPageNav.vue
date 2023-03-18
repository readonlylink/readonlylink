<script setup lang="ts">
import Hyperlink from '../../components/Hyperlink.vue'
import Lang from '../../components/Lang.vue'
import { State } from './State'
import { stateNextPath } from './stateNextPath'
import { statePrevPath } from './statePrevPath'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between">
    <div>
      <Hyperlink
        v-if="statePrevPath(state)"
        :href="`/books/${state.url}/-/${statePrevPath(state)}`"
        class="text-stone-400 hover:text-stone-700"
        title="Previous Page"
      >
        <Lang>
          <template #zh> 前一页 </template>
          <template #en> PREV </template>
        </Lang>
      </Hyperlink>
      <div v-else class="text-stone-200">
        <Lang>
          <template #zh> 前一页 </template>
          <template #en> PREV </template>
        </Lang>
      </div>
    </div>

    <div class="flex">
      <Hyperlink
        :href="`/books/${state.url}`"
        class="text-stone-400 hover:text-stone-700"
        title="Back to Title Page"
      >
        <Lang>
          <template #zh> 标题页 </template>
          <template #en> TITLE </template>
        </Lang>
      </Hyperlink>
      <div class="px-0.5">/</div>
      <Hyperlink
        :href="`/books/${state.url}?front-matter=contents`"
        class="text-stone-400 hover:text-stone-700"
        title="Back to Contents"
      >
        <Lang>
          <template #zh> 目录页 </template>
          <template #en> CONTENTS </template>
        </Lang>
      </Hyperlink>
    </div>

    <div>
      <Hyperlink
        v-if="stateNextPath(state)"
        :href="`/books/${state.url}/-/${stateNextPath(state)}`"
        class="text-stone-400 hover:text-stone-700"
        title="Next Page"
      >
        <Lang>
          <template #zh> 下一页 </template>
          <template #en> NEXT </template>
        </Lang>
      </Hyperlink>
      <div v-else class="text-stone-200">
        <Lang>
          <template #zh> 下一页 </template>
          <template #en> NEXT </template>
        </Lang>
      </div>
    </div>
  </div>
</template>
