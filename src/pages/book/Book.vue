<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BookLoaded from './BookLoaded.vue'
import BookLoading from './BookLoading.vue'
import { State } from './State'
import { loadState } from './loadState'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const url = String(route.params.url)
  const path = route.params.path ? String(route.params.path) : undefined
  const frontMatter = route.query['front-matter']
    ? String(route.query['front-matter'])
    : undefined

  return { url, path, frontMatter }
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
  <BookLoaded v-if="state" :state="state" />
  <BookLoading v-else :options="useStateOptions()" />
</template>
