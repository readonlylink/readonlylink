<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ArticleLoaded from './ArticleLoaded.vue'
import ArticleLoading from './ArticleLoading.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

function useStateOptions() {
  const url = String(route.params.url)

  return { url }
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
  <ArticleLoaded v-if="state" :state="state" />
  <ArticleLoading v-else :options="useStateOptions()" />
</template>
