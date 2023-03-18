<script setup lang="ts">
import Lang from '../../components/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div>
    <Lang class="font-logo text-2xl font-semibold text-stone-800">
      <template #zh> 作者动态 </template>
      <template #en> Authors' activities </template>
    </Lang>
  </div>
</template>
