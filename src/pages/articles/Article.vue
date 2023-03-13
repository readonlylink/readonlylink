<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import ArticleLoaded from './ArticleLoaded.vue'
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
    <div v-if="!state" class="px-4 py-6 font-sans text-xl text-gray-500">
      <Lang class="font-bold">
        <template #zh> 文章加载中⋯⋯ </template>
        <template #en> Loading article ... </template>
      </Lang>
    </div>

    <ArticleLoaded v-else :state="state" />
  </div>
</template>
