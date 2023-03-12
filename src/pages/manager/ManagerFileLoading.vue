<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="m-auto flex items-center justify-center">
    <div
      class="border border-yellow-600 p-3 text-yellow-600 hover:bg-stone-100 focus:outline-none"
    >
      <Lang>
        <template #zh> 加载中…… </template>
        <template #en> Loading... </template>
      </Lang>
    </div>
  </div>
</template>
