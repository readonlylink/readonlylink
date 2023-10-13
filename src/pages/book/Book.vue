<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import BookLoaded from './BookLoaded.vue'
import BookLoading from './BookLoading.vue'
import { State } from './State'
import { stateLoadFromCacheFirst } from './stateLoadFromCacheFirst'

const state = ref<State | undefined>(undefined)

const route = useRoute()

function useStateOptions() {
  const url = String(route.params.url)
  const path = route.params.path ? String(route.params.path) : undefined
  const frontMatter = route.query['front-matter']
    ? String(route.query['front-matter'])
    : undefined

  return { url, path, frontMatter }
}

watchEffect(async () => {
  state.value = reactive(await stateLoadFromCacheFirst(useStateOptions()))
})
</script>

<template>
  <BookLoaded v-if="state" :state="state" />
  <BookLoading v-else :options="useStateOptions()" />
</template>
