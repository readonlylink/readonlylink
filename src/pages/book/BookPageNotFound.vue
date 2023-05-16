<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <div class="flex flex-col space-y-2 py-2">
    <div class="font-mono text-2xl">404</div>

    <Lang class="text-xl">
      <template #zh> 没有这个页面。 </template>
      <template #en> Page not found. </template>
    </Lang>

    <div class="font-mono text-base">/{{ state.path }}</div>
  </div>
</template>
