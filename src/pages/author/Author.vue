<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AuthorLoaded from './AuthorLoaded.vue'
import AuthorLoading from './AuthorLoading.vue'
import { State, loadState } from './State'

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
  <AuthorLoaded v-if="state" :state="state" />
  <AuthorLoading v-else :options="useStateOptions()" />
</template>
