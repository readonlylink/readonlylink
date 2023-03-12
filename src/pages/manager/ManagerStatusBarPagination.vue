<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex justify-between">
    <div></div>
    <div class="flex">
      <button
        @click="state.page--"
        :disabled="state.page === 1"
        class="px-0.5"
        :class="[state.page !== 1 && 'hover:ring-1 hover:ring-white']"
      >
        <ChevronLeftIcon class="h-4 w-4" />
      </button>
      <div class="px-2" :title="`Page: ${state.page}`">{{ state.page }}</div>
      <button
        @click="state.page++"
        :disabled="state.dataset.length < state.size"
        class="px-0.5"
        :class="[
          state.dataset.length >= state.size && 'hover:ring-1 hover:ring-white',
        ]"
      >
        <ChevronRightIcon class="h-4 w-4" />
      </button>
    </div>
    <div></div>
  </div>
</template>
