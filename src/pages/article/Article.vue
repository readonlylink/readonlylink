<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ArticleLoaded from './ArticleLoaded.vue'
import ArticleLoading from './ArticleLoading.vue'
import { State } from './State'
import { loadStateFromCacheFirst } from './loadStateFromCacheFirst'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const url = String(route.params.url)

  return { url }
}

watch(
  () => route.params.url,
  async () => {
    state.value = await loadStateFromCacheFirst(useStateOptions())
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <ArticleLoaded v-if="state" :state="state" :key="state.url" />
  <ArticleLoading v-else :options="useStateOptions()" />
</template>
