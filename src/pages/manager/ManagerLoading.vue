<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { LoadStateOptions } from './loadState'

defineProps<{
  options: LoadStateOptions
}>()
</script>

<template>
  <div
    class="m-3 flex flex-col space-y-3 border border-yellow-600 p-3 text-yellow-600"
  >
    <Lang>
      <template #zh> 加载中…… </template>
      <template #en> Loading... </template>
    </Lang>

    <div class="border-t border-yellow-600"></div>

    <Lang>
      <template #zh> 参数： </template>
      <template #en> Options: </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre font-mono">
      {{ options }}
    </div>
  </div>
</template>
