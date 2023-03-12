<script setup lang="ts">
import PageFoot from './PageFoot.vue'
import PageHead from './PageHead.vue'
</script>

<template>
  <div class="flex h-screen flex-col">
    <PageHead class="px-3 py-2" />
    <div class="h-full overflow-y-auto">
      <slot />
    </div>
    <PageFoot />
  </div>
</template>
