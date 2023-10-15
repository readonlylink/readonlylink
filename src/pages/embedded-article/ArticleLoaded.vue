<script setup lang="ts">
import { Head } from '@vueuse/head'
import { onUnmounted } from 'vue'
import ArticleMarkdown from './ArticleMarkdown.vue'
import { State } from './State'
import { stateRefresh } from './stateRefresh'
import { stateTitle } from './stateTitle'

const props = defineProps<{ state: State }>()

onUnmounted(async () => {
  if (props.state.isLoadedFromCache) {
    await stateRefresh(props.state)
  }
})
</script>

<template>
  <div class="overflow-auto bg-white text-black dark:bg-black dark:text-white">
    <Head>
      <title>{{ stateTitle(state) }}</title>
    </Head>

    <div class="mx-auto max-w-3xl">
      <ArticleMarkdown :state="state" />
    </div>
  </div>
</template>
