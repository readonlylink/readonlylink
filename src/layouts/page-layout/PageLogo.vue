<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
</script>

<template>
  <div>
    <div class="relative hidden text-4xl font-bold sm:block">
      <span class="absolute -left-20 -top-0.5 tracking-tighter"> -r-- </span>
      <Lang>
        <template #zh> 只读链接 </template>
        <template #en> Readonly.Link </template>
      </Lang>
    </div>

    <div class="flex flex-col text-4xl font-bold sm:hidden">
      <Lang>
        <template #zh> 只读 </template>
        <template #en> -r-- </template>
      </Lang>
    </div>
  </div>
</template>
