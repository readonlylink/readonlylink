<script setup lang="ts">
import Lang from '../../components/Lang.vue'
</script>

<template>
  <Lang>
    <template #zh>
      <div class="font-logo text-2xl font-semibold text-stone-500">
        一个<span class="text-stone-900">技术工人</span>的<span
          class="text-stone-900"
          >简单好奇心</span
        >
      </div>
    </template>
    <template #en>
      <div class="font-logo text-2xl font-semibold text-stone-500">
        The <span class="text-stone-900">simple curiosity</span>
        <br class="md:hidden" />
        of a <span class="text-stone-900">craftsman</span>.
      </div>
    </template>
  </Lang>
</template>
