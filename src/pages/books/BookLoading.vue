<script setup lang="ts">
import Lang from '../../components/Lang.vue'
</script>

<template>
  <div class="px-4 py-6 font-sans text-xl text-stone-500">
    <Lang class="font-bold">
      <template #zh> 书籍加载中⋯⋯ </template>
      <template #en> Loading book ... </template>
    </Lang>
  </div>
</template>
