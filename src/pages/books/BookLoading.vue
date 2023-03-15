<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { StateOptions } from './State'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="px-4 py-6 font-sans text-xl text-stone-500">
    <Lang class="font-bold">
      <template #zh> 书籍加载中⋯⋯ </template>
      <template #en> Loading book ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre font-mono text-lg">
      {{ options }}
    </div>
  </div>
</template>
