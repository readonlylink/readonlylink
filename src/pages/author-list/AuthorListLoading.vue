<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
</script>

<template>
  <div>
    <div class="flex items-baseline">
      <Lang class="text-2xl font-bold">
        <template #zh> 作者 </template>
        <template #en> Authors </template>
      </Lang>
    </div>

    <Lang>
      <template #zh> 作者列表加载中⋯⋯ </template>
      <template #en> Loading author list... </template>
    </Lang>
  </div>
</template>
