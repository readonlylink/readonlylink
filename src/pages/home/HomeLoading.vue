<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div>
    <Lang class="font-logo text-2xl font-bold">
      <template #zh> 作者动态 </template>
      <template #en> Authors' activities </template>
    </Lang>

    <div class="border-b border-stone-500 pb-1"></div>

    <Lang>
      <template #zh> 作者动态加载中⋯⋯ </template>
      <template #en> Loading authors' activities ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-code text-sm">
      {{ options }}
    </div>
  </div>
</template>
