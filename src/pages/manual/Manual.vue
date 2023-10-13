<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ManualLoaded from './ManualLoaded.vue'
import ManualLoading from './ManualLoading.vue'
import { State } from './State'
import { stateLoadFromCacheFirst } from './stateLoadFromCacheFirst'

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

watchEffect(async () => {
  state.value = reactive(await stateLoadFromCacheFirst(useStateOptions()))
})
</script>

<template>
  <ManualLoaded v-if="state" :state="state" />
  <ManualLoading v-else :options="useStateOptions()" />
</template>
