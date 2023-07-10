<script setup lang="ts">
import { ref, watch } from 'vue'
import ReadonlylinkLoaded from './ReadonlylinkLoaded.vue'
import ReadonlylinkLoading from './ReadonlylinkLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const props = defineProps<{
  url: string
}>()

const state = ref<State | undefined>(undefined)

watch(
  () => props.url,
  async () => {
    state.value = await loadState(props)
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="mb-1.5 border border-black px-3 py-2.5 sm:max-w-[40rem]">
    <ReadonlylinkLoaded v-if="state" :state="state" />
    <ReadonlylinkLoading v-else :options="props" />
  </div>
</template>
