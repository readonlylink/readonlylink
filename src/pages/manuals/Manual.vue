<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ManualLoaded from './ManualLoaded.vue'
import ManualLoading from './ManualLoading.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

watch(
  () => route.params.url,
  async () => {
    const url = String(route.params.url)
    const path = route.params.path ? String(route.params.path) : undefined

    state.value = await loadState({ url, path })
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <ManualLoaded v-if="state" :state="state" />
    <ManualLoading v-else />
  </div>
</template>
