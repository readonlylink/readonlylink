<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div>
    <Lang class="text-2xl font-bold">
      <template #zh> 作者动态 </template>
      <template #en> Authors' activities </template>
    </Lang>

    <div class="border-b border-black pb-1 dark:border-white"></div>

    <Lang>
      <template #zh> 作者动态加载中⋯⋯ </template>
      <template #en> Loading authors' activities ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
      {{ options }}
    </div>
  </div>
</template>
