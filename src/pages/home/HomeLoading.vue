<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import HomeSlogan from './HomeSlogan.vue'
import { StateOptions } from './loadState'

defineProps<{ options: StateOptions }>()
</script>

<template>
  <div class="font-sans text-xl text-stone-500">
    <HomeSlogan />

    <div class="py-1"></div>

    <Lang>
      <template #zh> 作者动态加载中⋯⋯ </template>
      <template #en> Loading authors' activities ... </template>
    </Lang>

    <div class="overflow-x-auto whitespace-pre py-1 font-mono text-sm">
      {{ options }}
    </div>
  </div>
</template>
