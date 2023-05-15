<script setup lang="ts">
import 'mimor'
import { ref, watch } from 'vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  src: string
}>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.src,
  async () => {
    state.value = await loadState(props)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="h-[36rem] w-full md:w-[36rem]" title="An embedded mimor.">
    <x-mimor v-if="state" class="h-full" :src="state.src" />
  </div>
</template>
