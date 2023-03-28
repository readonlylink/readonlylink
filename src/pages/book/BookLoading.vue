<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="px-4 py-6 font-sans text-xl text-stone-500">
    <Lang>
      <template #zh> 书籍加载中⋯⋯ </template>
      <template #en> Loading book ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
      {{ options }}
    </div>
  </div>
</template>
