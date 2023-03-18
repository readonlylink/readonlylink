<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import HomeSlogan from './HomeSlogan.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="font-sans text-xl text-stone-500">
    <HomeSlogan />

    <Lang class="font-bold">
      <template #zh> 作者动态加载中⋯⋯ </template>
      <template #en> Loading authors' activities ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre font-mono text-sm">
      {{ options }}
    </div>
  </div>
</template>
