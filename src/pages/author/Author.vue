<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import AuthorLoaded from './AuthorLoaded.vue'
import AuthorLoading from './AuthorLoading.vue'
import { State } from './State'
import { stateLoadFromCacheFirst } from './stateLoadFromCacheFirst'

const state = ref<State | undefined>(undefined)

const route = useRoute()

function useStateOptions() {
  const url = String(route.params.url)
  const path = route.params.path ? String(route.params.path) : undefined

  return { url, path }
}

watchEffect(async () => {
  state.value = reactive(await stateLoadFromCacheFirst(useStateOptions()))
})
</script>

<template>
  <AuthorLoaded v-if="state" :state="state" />
  <AuthorLoading v-else :options="useStateOptions()" />
</template>
