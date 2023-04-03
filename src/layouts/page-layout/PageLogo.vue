<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
</script>

<template>
  <div>
    <div class="relative hidden font-logo text-4xl font-bold md:block">
      <span class="absolute -left-20 -top-0.5 tracking-tighter"> -r-- </span>
      <Lang>
        <template #zh> 只读链接 </template>
        <template #en> Readonly.Link </template>
      </Lang>
    </div>

    <div class="flex flex-col font-logo text-4xl font-bold md:hidden">
      <Lang>
        <template #zh> 只读 </template>
        <template #en> -r-- </template>
      </Lang>
    </div>
  </div>
</template>
