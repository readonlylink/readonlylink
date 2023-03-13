<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BookLoaded from './BookLoaded.vue'
import BookLoading from './BookLoading.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState({
      url: String(route.params.url),
      path: String(route.params.path),
    })
  },
  { immediate: true },
)

watch(
  () => route.params.path,
  async () => {},
)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <BookLoaded v-if="state" :state="state" />
    <BookLoading v-else />
  </div>
</template>
