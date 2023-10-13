<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ArticleLoaded from './ArticleLoaded.vue'
import ArticleLoading from './ArticleLoading.vue'
import { State } from './State'
import { stateLoadFromCacheFirst } from './stateLoadFromCacheFirst'

const state = ref<State | undefined>(undefined)

const route = useRoute()

watchEffect(async () => {
  state.value = reactive(
    await stateLoadFromCacheFirst({
      url: String(route.params.url),
    }),
  )
})
</script>

<template>
  <ArticleLoaded v-if="state" :state="state" :key="state.url" />
  <ArticleLoading
    v-else
    :options="{
      url: String(route.params.url),
    }"
  />
</template>
