<script setup lang="ts">
import Lang from '../../components/Lang.vue'

defineProps<{ list: Array<string> }>()
</script>

<template>
  <div class="py-3 font-sans text-xl text-stone-500">
    <Lang class="font-bold">
      <template #zh> 作者列表加载中⋯⋯ </template>
      <template #en> Loading author list ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
      <div v-for="(url, index) of list" :key="index">
        {{ url }}
      </div>
    </div>
  </div>
</template>
