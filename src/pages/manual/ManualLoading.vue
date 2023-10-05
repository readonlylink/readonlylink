<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="px-4 py-6 font-ui text-xl text-stone-500 dark:text-stone-400">
    <Lang>
      <template #zh> 手册加载中⋯⋯ </template>
      <template #en> Loading manual ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-code text-sm">
      {{ options }}
    </div>
  </div>
</template>
