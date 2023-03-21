<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ManualLoaded from './ManualLoaded.vue'
import ManualLoading from './ManualLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const url = String(route.params.url)
  const path = route.params.path ? String(route.params.path) : undefined

  return {
    url,
    path,
  }
}

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState(useStateOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <ManualLoaded v-if="state" :state="state" />
  <ManualLoading v-else :options="useStateOptions()" />
</template>
