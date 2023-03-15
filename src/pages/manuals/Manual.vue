<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ManualLoading from './ManualLoading.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function createStateOptions() {
  const url = String(route.params.url)
  const path = route.params.path ? String(route.params.path) : undefined
  return { url, path }
}

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState(createStateOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <ManualLoading :options="createStateOptions()" />
  <!-- <ManualLoaded v-if="state" :state="state" />
       <ManualLoading v-else :options="createStateOptions()" /> -->
</template>
