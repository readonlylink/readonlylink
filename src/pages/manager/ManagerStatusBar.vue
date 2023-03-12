<script setup lang="ts">
import ManagerStatusBarPagination from './ManagerStatusBarPagination.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div
    class="flex justify-center text-sm"
    :class="[
      'transition duration-150',
      state.status === 'ok' && 'bg-black text-white',
      state.status === 'running' && 'bg-yellow-500 text-yellow-100',
      state.status === 'error' && ' bg-red-500 text-red-100',
    ]"
  >
    <ManagerStatusBarPagination :state="state" />
  </div>
</template>
