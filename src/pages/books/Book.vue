<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Lang from '../../components/Lang.vue'
import { loadState, State } from './State'
import { stateReactive } from './stateReactive'
// import BookTitlePage from "./BookTitlePage.vue"
// import BookContents from "./BookContents.vue"
// import BookPage from "./BookPage.vue"

const route = useRoute()

const state = ref<State | undefined>(undefined)

watch(
  () => route.params.url,
  async () => {
    state.value = stateReactive(
      await loadState({
        url: String(route.params.url),
        path: String(route.params.path),
      }),
    )
  },
  { immediate: true },
)

watch(
  () => route.params.path,
  async () => {},
)
</script>

<template>
  <Head>
    <!-- <title v-if="state">{{ state.config.title }}</title> -->
  </Head>

  <div class="mx-auto max-w-3xl">
    <div v-if="!state" class="px-4 py-6 font-sans text-xl text-gray-500">
      <Lang class="font-bold">
        <template #zh> 书籍加载中⋯⋯ </template>
        <template #en> Loading book ... </template>
      </Lang>
    </div>

    <BookContents v-else-if="state.frontMatter === 'contents'" :state="state" />
    <BookPage v-else-if="state.path" :state="state" />
    <BookTitlePage v-else :state="state" />
  </div>
</template>
