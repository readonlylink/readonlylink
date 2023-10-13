<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './stateLoad'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="px-4 py-6 text-xl text-stone-500 dark:text-stone-400">
    <Lang>
      <template #zh> 历史加载中⋯⋯ </template>
      <template #en> Loading history ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
      {{ options }}
    </div>
  </div>
</template>
