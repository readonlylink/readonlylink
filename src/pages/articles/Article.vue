<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ArticleLoaded from './ArticleLoaded.vue'
import ArticleLoading from './ArticleLoading.vue'
import { loadState, State } from './State'

const route = useRoute()

const state = ref<State | undefined>(undefined)

watch(
  () => route.params.url,
  async () => {
    state.value = await loadState({
      url: String(route.params.url),
    })
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="mx-auto max-w-3xl">
    <ArticleLoaded v-if="state" :state="state" />
    <ArticleLoading v-else />
  </div>
</template>
