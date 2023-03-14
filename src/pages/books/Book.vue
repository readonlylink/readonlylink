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
    const url = String(route.params.url)
    const path = String(route.params.path)
    const frontMatter = route.query['front-matter']
      ? String(route.query['front-matter'])
      : undefined

    state.value = await loadState({ url, path, frontMatter })
  },
  { immediate: true },
)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <BookLoaded v-if="state" :state="state" />
    <BookLoading v-else />
  </div>
</template>
